import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleIndexComponent } from './article-index/article-index.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    ArticleAddComponent,
    ArticleEditComponent,
    ArticleIndexComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    TableModule
  ]
})
export class ArticleModule { }
