import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleIndexComponent } from './article-index/article-index.component';
import { ArticleAddComponent } from './article-add/article-add.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';

const routes: Routes = [
  {
    path:"",
    component : ArticleIndexComponent
  },
  {
    path:"add",
    component : ArticleAddComponent
  },
  {
    path:"edit",
    component : ArticleEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
