import { Component, ViewChild } from '@angular/core';
import { CreateUserFormComponent } from '../../components/create-user-form/create-user-form.component';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styles: [
  ]
})
export class UserPageComponent {
  @ViewChild('createUserFormComponent') createUserFormComponent!: CreateUserFormComponent;
}
