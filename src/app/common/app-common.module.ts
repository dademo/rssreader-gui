import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AngularModule } from './angular.module';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AngularModule,
  ]
})
export class AppCommonModule { }
