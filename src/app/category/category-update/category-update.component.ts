import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrl: './category-update.component.css'
})
export class CategoryUpdateComponent {
  categoryId: number=0;
  form:FormGroup;
  msg:string='';
  open: boolean=false;

  constructor( private activatedRoute: ActivatedRoute , private fb:FormBuilder, private categoryService:CategoryService){
       this.form=this.fb.group({
      categoryName:['categoryName',[Validators.required,Validators.maxLength(40),Validators.minLength(3)]]
        })
  } ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
        this.categoryId = Number(params.get('id'));
        console.log("params",params)
      console.log("id",this.categoryId)
      this.getCategoryById(this.categoryId)
        // this.getClient();
      });
  }
  getCategoryById(id:number){
this.categoryService.getCategoryId(id).subscribe(data=>{
  console.log("data",data)
  this.form.patchValue(data)
})
  }
  submit(){
this.categoryService.updateCategory(this.categoryId,this.form.value).subscribe((data:any)=>{
this.msg=" user id"+String(this.categoryId)+" is update"
this.open=true 
})
  }
  onClose() {
 this.open=!this.open
}
}
