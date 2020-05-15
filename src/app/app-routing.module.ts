import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignUpComponent } from './auth/user-sign-up/user-sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: UserSignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
