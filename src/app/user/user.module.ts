import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [

  UserAddComponent,
         UserListComponent,
         UserUpdateComponent,
         UserDeleteComponent
  ],
  imports: [
    CommonModule,RouterModule,
    UserRoutingModule,ClarityModule,FormsModule,ReactiveFormsModule
  ]
})
export class UserModule { }
