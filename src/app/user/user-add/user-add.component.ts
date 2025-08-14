import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {
  msg: string='';
  open: boolean=false;
onClose() {
 this.open=!this.open
}
  form:FormGroup

  constructor(private fb:FormBuilder, private userService:UserService){
    this.form=this.fb.group({
      name:['name',[Validators.required,Validators.maxLength(40)]],
  adresse:['adresse',[Validators.required,Validators.maxLength(40),Validators.minLength(3)]]
    })
  }
  submit(){
this.userService.addUser(this.form.value).subscribe(data=>{
  this.msg= "user add with success  "+data.name+"  id !"+data.id
  this.open=true
  console.log(' user',data)
})
  }
}
