import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveloginComponent } from './reactivelogin/reactivelogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, ReactiveloginComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
  ],
  exports: [LoginComponent, ReactiveloginComponent, SignupComponent],
})
export class UserauthModule {}
