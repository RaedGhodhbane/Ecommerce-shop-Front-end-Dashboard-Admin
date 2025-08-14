import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path:'', redirectTo: 'list-category', pathMatch: 'full'},
  {path:'add-category', component:CategoryAddComponent ,canActivate: [AuthGuard]},
  {path:'update-category/:id', component:CategoryUpdateComponent ,canActivate: [AuthGuard]},
  {path:'list-category', component:CategoryListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
