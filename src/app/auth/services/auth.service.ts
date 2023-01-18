import { Injectable } from '@angular/core';

import { User } from '../model/user.model';

import { users } from 'src/app/data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authentticatedUser: User | null = null;

  constructor() {}

  login(username: string, password: string) {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      this.authentticatedUser = user;
      localStorage.setItem('user', JSON.stringify(this.authentticatedUser));
    }
  }

  logout() {
    this.authentticatedUser = null;
    localStorage.removeItem('user');
  }

  verifyAuthentication(): Observable<boolean> {
    if (localStorage.getItem('user')) {
      return of(true);
    }

    return of(false);
  }
}
