import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent {
  msg: string='';
  open: boolean=false;
onClose() {
 this.open=!this.open
}
  form:FormGroup

  constructor(private fb:FormBuilder, private categoryService:CategoryService){
    this.form=this.fb.group({
      categoryName:['categoryName',[Validators.required,Validators.minLength(3)]]
    })
  }
  submit(){
this.categoryService.addCategory(this.form.value).subscribe(data=>{
  this.msg= "user add with success  "+data.categoryName+"  id !"+data.id
  this.open=true
  console.log(' user',data)
})
  }
}
