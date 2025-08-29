import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { CoreModule } from './core/core.module';
import '@cds/core/icon/register.js';
import { boltIcon, bugIcon, bugIconName, certificateIcon, ClarityIcons, cogIcon, sadFaceIcon, shieldIcon, sunIcon, userIcon, vmBugIcon, worldIcon } from '@cds/core/icon';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

ClarityIcons.addIcons(userIcon,boltIcon,sadFaceIcon,bugIcon,shieldIcon,certificateIcon,cogIcon,vmBugIcon,worldIcon,sunIcon);
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,RouterModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule, BrowserAnimationsModule,CoreModule,
    ClarityModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
