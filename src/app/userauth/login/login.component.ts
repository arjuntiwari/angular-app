import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userdata: any;
  usermails = ['test1@mail.com', 'test1mail.com'];
  color = 'yellow';
  bgcolor = 'green';

  getLoginCredentials(data: NgForm) {
    console.warn(data);
    this.userdata = data;
  }

  updatecolor() {
    this.color = 'green';
    this.bgcolor = 'yellow';
  }
}
