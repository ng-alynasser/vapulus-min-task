import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '@vapulus/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) {}

  canActivate(): Observable<boolean> | boolean {
    if (this.authenticationService.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
