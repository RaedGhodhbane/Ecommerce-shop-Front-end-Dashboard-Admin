import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B1Component } from './b-1/b-1.component';
import { B2Component } from './b-2/b-2.component';
import { B3Component } from './b-3/b-3.component';
import { AModule } from '../a/a.module';
import { BComponent } from './b.component';
@NgModule({
  declarations: [
    B1Component,
    B2Component,
    B3Component,
    BComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    BComponent
    ,   B1Component,
    B2Component,
    B3Component,
    BComponent
  ]
})
export class BModule { }
