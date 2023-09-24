import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [

  {
    path : '',
    component : AdminComponent,
    children : [
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
    ]
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
