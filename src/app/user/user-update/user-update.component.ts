import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent implements OnInit {
  userId: number=0;
  form:FormGroup
  msg:string=''
  open: boolean=false;

  constructor( private activatedRoute: ActivatedRoute , private fb:FormBuilder, private userSerive:UserService){
       this.form=this.fb.group({
          name:['name',[Validators.required,Validators.maxLength(40)]],
      adresse:['adresse',[Validators.required,Validators.maxLength(40),Validators.minLength(3)]]
        })
  } ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
        this.userId = Number(params.get('id'));
        console.log("params",params)
      console.log("id",this.userId)
      this.getUserById(this.userId)
        // this.getClient();
      });
  }
  getUserById(id:number){
this.userSerive.getUserId(id).subscribe(data=>{
  console.log("data",data)
  this.form.patchValue(data)
})
  }
  submit(){
this.userSerive.update(this.userId,this.form.value).subscribe((data:any)=>{
this.msg=" user id"+String(this.userId)+" is update"
this.open=true 
})
  }
  onClose() {
 this.open=!this.open
}

}
