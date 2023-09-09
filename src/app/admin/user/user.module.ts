import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDelComponent } from './user-del/user-del.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserIndexComponent } from './user-index/user-index.component';


@NgModule({
  declarations: [
    UserAddComponent,
    UserDelComponent,
    UserEditComponent,
    UserIndexComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
