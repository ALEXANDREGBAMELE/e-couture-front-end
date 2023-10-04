import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ModeleArticleComponent } from './components/modele-article/modele-article.component';
import { DetailsComponent } from "./components/details/details.component";
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ListeArticlesComponent } from './pages/liste-articles/liste-articles.component';
import { AtelierPageComponent } from './pages/atelier-page/atelier-page.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [

  {
    path : '',
    component : IndexComponent,
    children : [
        {
          path: '',
          component: AccueilComponent
        },
        {
          path: "connexion",
          component: ConnexionComponent
        },
        {
          path: 'inscription',
          component: InscriptionComponent
        },
        {
          path: 'modeles',
          component: ModeleArticleComponent
        },
        {
          path: 'detail',
          component: DetailsComponent
        },
        
       
        {
          path: "articles",
          component: ListeArticlesComponent
        },
        {
          path: "boutique",
          component: AtelierPageComponent
        },
        {
          path: "apropos",
          component: AproposComponent
        },
    ]
  },
  
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule)
  // },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
