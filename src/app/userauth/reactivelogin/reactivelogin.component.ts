import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivelogin',
  templateUrl: './reactivelogin.component.html',
  styleUrl: './reactivelogin.component.css',
})
export class ReactiveloginComponent {
  reactiveform = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  getlogin() {
    console.warn(this.reactiveform.value);
  }

  get user() {
    return this.reactiveform.get('user');
  }

  get password() {
    return this.reactiveform.get('password');
  }
}
