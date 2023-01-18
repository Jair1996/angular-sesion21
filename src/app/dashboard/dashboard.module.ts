import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserPageComponent } from './pages/user-page/user-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    LayoutComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
