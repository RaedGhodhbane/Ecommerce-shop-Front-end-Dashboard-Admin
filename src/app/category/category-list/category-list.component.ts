import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
dataCategory: any;
selected:any[]=[]
trackUserItemById:any
toDeleted: any[]=[];
open: boolean=false;
constructor(private categoryService:CategoryService ,  private router:Router){

}
ngOnInit(): void {
this.getCategoryList()
}
getCategoryList(){
    this.categoryService.listCategory().subscribe(data=>{
    this.dataCategory=data
  })
}
selectionChanged(event:any){
console.log(" selected",this.selected)
this.toDeleted=[]
this.selected.map(x=> this.toDeleted.push(x.id))
console.log('> this.toDeleted', this.toDeleted)
 
}
update(){
  this.router.navigateByUrl('/category/update-category/'+String(this.selected[0].id))
}
openAction(){
  this.open=true
}
closeAction(){
  this.open=!this.open
}
saveAction(){
     this.getCategoryList()
    this.selected=[]
    this.open=!this.open


}
}
