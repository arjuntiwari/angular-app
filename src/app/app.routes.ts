import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './userauth/login/login.component';
import { ReactiveloginComponent } from './userauth/reactivelogin/reactivelogin.component';
import { SignupComponent } from './userauth/signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
  {
    component: SignupComponent,
    path: 'signup',
    children: [
      { path: 'contact', component: ContactComponent },
      { path: 'shop', component: ShopComponent },
    ],
  },
  { component: LoginComponent, path: 'login' },
  { component: ReactiveloginComponent, path: 'reactivelogin' },
];
