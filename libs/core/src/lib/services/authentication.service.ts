import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private authState$: BehaviorSubject<boolean>;

  constructor(private readonly localStorageService: LocalStorageService) {
    this.authState$ = new BehaviorSubject(false);
    if (localStorageService.get('authToken')) {
      this.authState$.next(true);
    }
  }

  get isAuthenticated(): Observable<boolean> {
    return this.authState$.asObservable();
  }

  login(): void {
    this.localStorageService.set('authToken', 'RANDOM TOKEN');
    this.authState$.next(true);
  }
}
