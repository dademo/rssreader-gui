import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { moduleRoutes as CommonRoutes } from './common/common-routing';
import { moduleRoutes as FeedRoutes } from './feeds/feeds-routing';

const routes: Routes = (<Routes>[
  { path: '',   redirectTo: '/feeds', pathMatch: 'full' },
]).concat(
  CommonRoutes,
  FeedRoutes,
);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
