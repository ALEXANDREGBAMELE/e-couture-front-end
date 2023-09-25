import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtelierRoutingModule } from './atelier-routing.module';
import { AtelierIndexComponent } from './atelier-index/atelier-index.component';
import { AtelierAddComponent } from './atelier-add/atelier-add.component';
import { AtelierEditComponent } from './atelier-edit/atelier-edit.component';
import { AtelierDeleteComponent } from './atelier-delete/atelier-delete.component';
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
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    AtelierIndexComponent,
    AtelierAddComponent,
    AtelierEditComponent,
    AtelierDeleteComponent
  ],
  imports: [
    CommonModule,
    AtelierRoutingModule,
    ButtonModule,
    TableModule,
    ToolbarModule,
    SplitButtonModule,
    ReactiveFormsModule,
    CardModule,
    KeyFilterModule,
    InputTextareaModule,
  ]
})
export class AtelierModule { }
