import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { routes as routeConstants } from './constants/routes';

const { LOGIN, DASHBOARD, USER, } = routeConstants

const routes: Routes = [
  { path: '', redirectTo: `/${LOGIN}`, pathMatch: 'full' },
  { path: LOGIN, loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  {
    path: '', component: LayoutComponent, children: [
      { path: DASHBOARD, loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: USER, loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
