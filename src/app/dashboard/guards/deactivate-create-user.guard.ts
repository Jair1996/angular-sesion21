import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class DeactivateCreateUserGuard implements CanDeactivate<unknown> {
  async canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):  Promise<boolean> {
    const { createUserFormComponent } = component;

    const isFormPristine = createUserFormComponent.createForm.pristine;

    if (isFormPristine) {
      return true;
    }

    const result = await Swal.fire({
      title: '¿Estás seguro de salir de la página?',
      text: 'Tiene cambios sin guardar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    });

    if(result.isConfirmed) {
      return true
    }

    return false
  }
}
