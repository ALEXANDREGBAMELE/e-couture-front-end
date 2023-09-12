import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDelComponent } from './user-del/user-del.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserListeComponent } from './user-liste/user-liste.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    UserAddComponent,
    UserDelComponent,
    UserEditComponent,
    UserIndexComponent,
    UserListeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TableModule
  ]
})
export class UserModule { }
