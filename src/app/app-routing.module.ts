import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAuthorizationGuard } from './auth/guards/auth-authorization.guard';
import { DashboardAuthorizationGuard } from './dashboard/guards/dashboard-authorization.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthAuthorizationGuard],
    canLoad: [AuthAuthorizationGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [DashboardAuthorizationGuard],
    canLoad: [DashboardAuthorizationGuard],
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
