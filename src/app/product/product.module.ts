import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductAddComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,ClarityModule,ReactiveFormsModule,FormsModule
  ]
})
export class ProductModule { }
