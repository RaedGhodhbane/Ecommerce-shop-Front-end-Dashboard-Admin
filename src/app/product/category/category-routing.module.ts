import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './category-add/category-add.component';
import { AuthGuard } from '../../auth/auth.guard';

const routes: Routes = [
  {path:'category-add', component:CategoryAddComponent ,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
