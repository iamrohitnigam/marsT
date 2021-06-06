import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsrDetailPageRoutingModule } from './usr-detail-routing.module';

import { UsrDetailPage } from './usr-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsrDetailPageRoutingModule
  ],
  declarations: [UsrDetailPage]
})
export class UsrDetailPageModule {}
