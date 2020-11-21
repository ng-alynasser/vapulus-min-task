import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '@vapulus/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) {}

  canActivate(): boolean {
    if (this.authenticationService.isAuthenticated) {
      this.router.navigate(['/']);
    } else {
      return true;
    }
  }
}
