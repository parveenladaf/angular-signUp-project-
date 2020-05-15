import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';

@NgModule({
  declarations: [UserSignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
