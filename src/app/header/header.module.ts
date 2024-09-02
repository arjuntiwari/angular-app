import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserauthModule } from '../userauth/userauth.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterOutlet, RouterLink, UserauthModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
