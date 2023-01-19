import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomePageComponent,
    LayoutComponent,
    UserPageComponent,
    NavbarComponent,
    CreateUserFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ]
})
export class DashboardModule { }
