import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthAuthorizationGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.verifyAuthentication().pipe(
      map((resp) => !resp),
      tap((isNotAuthenticated) => {
        if (!isNotAuthenticated) {
          this.router.navigate(['./dashboard/home']);
        }
      })
    );
  }

  canLoad(): Observable<boolean> | boolean {
    return this.authService.verifyAuthentication().pipe(
      map((resp) => !resp),
      tap((isNotAuthenticated) => {
        if (!isNotAuthenticated) {
          this.router.navigate(['./dashboard/home']);
        }
      })
    );
  }
}
