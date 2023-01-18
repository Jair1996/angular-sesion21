import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [],
})
export class LoginPageComponent {
  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  login() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.login(username, password);

    if (this.authService.authentticatedUser) {
      this.router.navigate(['/dashboard']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña incorrecta',
      });
    }
  }
}
