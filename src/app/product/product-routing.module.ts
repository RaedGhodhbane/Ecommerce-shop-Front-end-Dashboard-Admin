import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  {path:'category',loadChildren:()=>import('./category/category.module').then(m=>m.CategoryModule)},
  {path:'product-add',component:ProductAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
