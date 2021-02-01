import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FeedItemComponent } from 'src/app/feeds/feed-item/feed-item.component';
import { FeedListComponent } from 'src/app/feeds/feed-list/feed-list.component';
import { AngularModule } from '../common/angular.module';
import { ViewTableComponent } from './feed-list/view-table/view-table.component';
import { ViewGridComponent } from './feed-list/view-grid/view-grid.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    FeedItemComponent,
    FeedListComponent,
    ViewTableComponent,
    ViewGridComponent,
  ],
  exports: [
    FeedItemComponent,
    FeedListComponent,
  ],
  imports: [
    BrowserModule,
    AngularModule,
    FlexLayoutModule,
  ]
})
export class FeedsModule { }
