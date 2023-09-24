import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDelComponent } from './user-del/user-del.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ArticleRoutingModule } from '../article/article-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { KeyFilterModule } from 'primeng/keyfilter';
@NgModule({
  declarations: [
    UserAddComponent,
    UserDelComponent,
    UserEditComponent,
    UserIndexComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    TableModule,
    ButtonModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    ButtonModule,
    ArticleRoutingModule,
    ReactiveFormsModule,
    CardModule,
    PasswordModule,
    InputNumberModule,
    InputMaskModule,
    KeyFilterModule,
  ],
 
})
export class UserModule { }
