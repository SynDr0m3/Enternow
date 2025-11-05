import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing-module';
import { FaceCapture } from './face-capture/face-capture';
import { Signin } from './signin/signin';
import { Signout } from './signout/signout';
import { MaterialModule } from '../material/material-module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FaceCapture,
    Signin,
    Signout
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class StaffModule { }
