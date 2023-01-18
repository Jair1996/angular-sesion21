import { Component } from '@angular/core';
import { User } from 'src/app/auth/model/user.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent {
  user!: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }
}
