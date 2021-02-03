import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularModule } from 'src/app/common/angular.module';
import { HttpClientModule } from '@angular/common/http';

import { FeedItemComponent } from 'src/app/feeds/feed-item/feed-item.component';
import { FeedListComponent } from 'src/app/feeds/feed-list/feed-list.component';
import { ViewTableComponent } from './feed-list/view-table/view-table.component';
import { ViewGridComponent } from './feed-list/view-grid/view-grid.component';
import { ViewGridItemComponent } from './feed-list/view-grid-item/view-grid-item.component';


@NgModule({
  declarations: [
    FeedItemComponent,
    FeedListComponent,
    ViewTableComponent,
    ViewGridComponent,
    ViewGridItemComponent,
  ],
  exports: [
    FeedItemComponent,
    FeedListComponent,
  ],
  imports: [
    BrowserModule,
    AngularModule,
    HttpClientModule,
    FlexLayoutModule,
  ]
})
export class FeedsModule { }
