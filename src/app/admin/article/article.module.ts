import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleIndexComponent } from './article-index/article-index.component';
import { TableModule } from 'primeng/table';

import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  declarations: [
    ArticleAddComponent,
    ArticleEditComponent,
    ArticleIndexComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    ToolbarModule,
    SplitButtonModule,
    CardModule,
    KeyFilterModule,
    InputNumberModule,
  ]
})
export class ArticleModule { }
