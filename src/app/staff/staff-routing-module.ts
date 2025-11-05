import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceCapture } from './face-capture/face-capture';
import { Signin } from './signin/signin';
import { Signout } from './signout/signout';

const routes: Routes = [
  {
    path: 'face-capture',
    component: FaceCapture,
  },
  {
    path: 'sign-in',
    component: Signin,
  },
  {
    path: 'sign-out',
    component: Signout,
  },
  {
    path: '', //default route for staff module when no path is provided
    redirectTo: 'sign-in',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
