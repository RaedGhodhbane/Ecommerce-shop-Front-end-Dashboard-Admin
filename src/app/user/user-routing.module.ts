import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: 'list-user', pathMatch: 'full' ,},
  {path:"add-user",component:UserAddComponent ,canActivate: [AuthGuard]},
  {path:"update-user/:id",component:UserUpdateComponent ,canActivate: [AuthGuard]},
  {path:"list-user",component:UserListComponent,canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { 
}
