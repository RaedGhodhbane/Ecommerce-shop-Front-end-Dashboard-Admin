import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'products-list', pathMatch: 'full' },
  { path: 'products-list', component: ProductListComponent ,canActivate: [AuthGuard] },
  { path: 'products/add', component: ProductAddComponent ,canActivate: [AuthGuard] },
  { path: 'products/update/:id', component: ProductUpdateComponent ,canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'products-list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
