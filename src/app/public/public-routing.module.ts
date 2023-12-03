import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsArticleComponent } from './article/components/details-article/details-article.component';

const routes: Routes = [
  {
    path:"",
    component: IndexComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "articles",
        loadChildren: ()=> import("./article/article.module").then(m => m.ArticleModule),
      }

  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
