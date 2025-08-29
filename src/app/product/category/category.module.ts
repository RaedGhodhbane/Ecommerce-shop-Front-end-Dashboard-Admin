import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryAddComponent } from './category-add/category-add.component';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [
    CategoryAddComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,ClarityModule
  ]
})
export class CategoryModule { }
