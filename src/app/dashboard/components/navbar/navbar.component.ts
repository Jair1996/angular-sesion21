import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    const backupLocalStorage = localStorage.getItem('user')!;

    this.authService.logout();

    this.router.navigate(['./auth/login']).then((succeds) => {
      if (!succeds) {
        localStorage.setItem('user', backupLocalStorage);
      }
    });
  }
}
