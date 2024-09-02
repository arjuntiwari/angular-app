import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserauthModule } from './userauth/userauth.module';
import { HeaderModule } from './header/header.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RedElDirective } from './red-el.directive';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderModule,
    FormsModule,
    CommonModule,
    RedElDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-app';
  displaylist: any[] = [];
  getvalue(item: any) {
    console.warn(item);
    this.displaylist.push({ id: this.displaylist.length, val: item });
  }

  removeData(id: number) {
    this.displaylist = this.displaylist.filter((item) => item.id != id);
  }
}
