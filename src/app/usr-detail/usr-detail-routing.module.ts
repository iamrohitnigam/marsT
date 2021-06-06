import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsrDetailPage } from './usr-detail.page';

const routes: Routes = [
  {
    path: '',
    component: UsrDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsrDetailPageRoutingModule {}
