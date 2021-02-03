import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularModule } from './common/angular.module';

import { FeedsModule } from './feeds/feeds.module';
import { AppCommonModule } from './common/app-common.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularModule,
    FlexLayoutModule,
    AppCommonModule,
    FeedsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
