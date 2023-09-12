import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AdminComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TableModule,
  ]
})
export class AdminModule { }
