import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { ProductCategoryService } from '../category/category.service';
import { ProductCategory } from '../category/category';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent  implements OnInit{
  form: FormGroup;
  userList: any[]=[];
  categoryList: ProductCategory[]=[]
  category: any;
  user: any;

  constructor(private formBuilder: FormBuilder , private userService:UserService,private categoryService:ProductCategoryService) {
    this.form = this.formBuilder.group({
      name: this.formBuilder.group({
        name: ['name', Validators.required],
        description: ['description', Validators.required],
      }),
       categoryProvider: this.formBuilder.group({
        category: [],
        provider: [],
      }),
      unitPrice: this.formBuilder.group({
        unitPrice: [],
        imageUrl: [],
      }),
      StockProductStatus: this.formBuilder.group({
        unitsInStock: [],
        productStatus: [],
      }),
        
    });
  }
  ngOnInit(): void {
this.getCategoryLsi()
this.getUserList()
  }

  getUserList(){
    this.userService.listUser().subscribe(data=>{
      console.log("user",data)
      this.userList=data
    })
  }
  getCategoryLsi(){
    this.categoryService.getProductCategoryList().subscribe(data=>{
      console.log("data",data)
      this.categoryList=data
    })
  }
  select(event:any){
    console.log('select object ',event)
    this.category=event.model
    console.log(" this.category", this.category)

  }
  selectUser(event:any){
     this.user=event.model
    console.log(" this.user", this.user)
    console.log("form user", this.form.get('categoryProvider')?.value?.provider);
  }
  submit() {
    console.log('reactive form submit', this.form.value);
  }

}
