import { Component } from '@angular/core';
import { FormBuilder,
  FormGroup,
  Validators,
  AbstractControl } from '@angular/forms';
  import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  myForm: FormGroup;
  login: AbstractControl;
  password: AbstractControl;

  constructor(fb: FormBuilder, private router: Router) {
    this.myForm = fb.group({
      'login': ['', Validators.required],
      'password': ['', Validators.required]
    });
   }

   onSubmit(form: any): void {
    if (this.myForm.controls['login'].value === 'admin' && this.myForm.controls['password'].value === 'admin') {
      this.router.navigateByUrl('dashboard');
    }
  }

}
