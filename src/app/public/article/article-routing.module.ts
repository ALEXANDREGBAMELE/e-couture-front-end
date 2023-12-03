import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeArticlesComponent } from './components/liste-articles/liste-articles.component';
import { DetailsArticleComponent } from './components/details-article/details-article.component';

const routes: Routes = [ 
  {
    path: "",
    component: ListeArticlesComponent
  },
  {
    path: "detail",
    component: DetailsArticleComponent
  },
  {
    path:"commande",
    loadChildren: () => import('../../protected/protected.module').then(m => m.ProtectedModule),

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
