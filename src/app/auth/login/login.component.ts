import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  token="jflsflshfqlghqlfbgblqdw;gqfbdl"
  expiresIn=24*60*60
  forms:FormGroup
  constructor(private fb:FormBuilder,private router:Router){this.forms=this.fb.group({
    role:[''],
    email:['email',[Validators.required,Validators.email]],
    password:['password',Validators.required],
    rememberMe:[]

  })

  }
  submit(){
    if (this.forms.valid){
              document.cookie = `token=${this.token}; Max-Age=${this.expiresIn}; path=/`;
              this.router.navigateByUrl('/dashbaord')

    }

  }

}
