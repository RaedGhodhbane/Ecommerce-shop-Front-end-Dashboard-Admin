import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrl: './category-delete.component.css'
})
export class CategoryDeleteComponent {
  @Input('listeId')
  listeId:number[]=[]
  @Output()
  close= new EventEmitter<boolean>()
  @Output()
  save= new EventEmitter<boolean>()
  constructor(private categoryService:CategoryService){}
ngOnInit(): void {
  
}
 closed(){
  this.close.emit(true)
 }
 saved(){
  this.listeId.forEach(element=>{
    this.categoryService.deleteCategory(element).subscribe(data=>{
    console.log("data",data)
    this.save.emit(true)

    })

  })


 }
}
