import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminManageRoutingModule } from './admin-manage-routing.module';
import { AdminManageComponent } from './admin-manage.component';
import {AppModule} from "../../app.module";


@NgModule({
  declarations: [
    AdminManageComponent
  ],
  imports: [
    CommonModule,
    AdminManageRoutingModule,
    AppModule
  ]
})
export class AdminManageModule { }
