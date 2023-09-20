import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user-routing.module').then(m => m.UserRoutingModule)
  },
  {
    path: 'article',
    loadChildren: () => import('./article/article-routing.module').then(m => m.ArticleRoutingModule)
  },
  {
    path: 'atelier',
    loadChildren: () => import('./atelier/atelier-routing.module').then(m => m.AtelierRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
