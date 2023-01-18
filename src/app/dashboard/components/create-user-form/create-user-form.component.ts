import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styles: [],
})
export class CreateUserFormComponent {
  createForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  createUser(): void {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Nice',
      text: `El usuario ${
        this.createForm.get('name')?.value
      } fue creado correctamente`,
    });
    this.createForm.reset();
  }

  isFieldInvalid(control: string) {
    return (
      this.createForm.controls[control].errors &&
      this.createForm.controls[control].touched
    );
  }
}
