import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TableModule } from 'primeng/table';
import { UserModule } from './user/user.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'primeng/sidebar';
@NgModule({
  declarations: [
    AdminComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule,
    UserModule,
    ReactiveFormsModule,
    SidebarModule,
  ]
})
export class AdminModule { }
