import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private authState: boolean;

  constructor(private readonly localStorageService: LocalStorageService) {
    if (localStorageService.get('authToken')) {
      this.authState = true;
    }
  }

  get isAuthenticated(): boolean {
    return this.authState;
  }

  login(): void {
    this.localStorageService.set('authToken', 'RANDOM TOKEN');
    this.authState = true;
  }
}
