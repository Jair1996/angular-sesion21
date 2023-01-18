import { Injectable } from '@angular/core';

import { User } from '../model/user.model';

import { users } from 'src/app/data';

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
}
