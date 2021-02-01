import { Routes } from "@angular/router";
import { FeedItemComponent } from "./feed-item/feed-item.component";
import { FeedListComponent } from "./feed-list/feed-list.component";

export const moduleRoutes: Routes = [
  { path: 'feeds', component: FeedListComponent },
  { path: 'feeds/:feedId', component: FeedItemComponent },
];
