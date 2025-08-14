import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,ClarityModule,RouterModule
  ],exports:[
     HeaderComponent,
    SideBarComponent
  ]
})
export class CoreModule { }
