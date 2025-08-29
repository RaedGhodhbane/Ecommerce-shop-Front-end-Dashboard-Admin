import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"user",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule)},
  {path:"auth",loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'dashbaord',loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
   {path:'product',loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
