import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Staff } from './staff/staff';
import { Signins } from './signins/signins';
import { Report } from './report/report';
import { Login } from './login/login';
import { AdminLayout } from './layout/admin-layout/admin-layout';

const routes: Routes = [
  {
    path: 'home',
    component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'staff',
        component: Staff,
      },
      {
        path: 'sign-ins',
        component: Signins,
      },
      {
        path: 'reports',
        component: Report,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
