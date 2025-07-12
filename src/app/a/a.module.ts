import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A1Component } from './a-1/a-1.component';
import { A2Component } from './a-2/a-2.component';
import { A3Component } from './a-3/a-3.component';
import { BModule } from '../b/b.module';
import { AComponent } from './a.component';



@NgModule({
  declarations: [
    A1Component,
    A2Component,
    A3Component,AComponent
  ],
  imports: [
    CommonModule,BModule
],
  exports:[
   AComponent
  ]
})
export class AModule { }
