import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ModeleArticleComponent } from './components/modele-article/modele-article.component';
import {DetailsComponent} from "./components/details/details.component";
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import {UtilisateursComponent} from "./admin/pages/utilisateurs/utilisateurs.component";

const routes: Routes = [
  {
    path:'connexion',
    component : ConnexionComponent
  },
  {
    path:'modeles',
    component : ModeleArticleComponent
  },
  {
    path:'detail',
    component : DetailsComponent
  },
  {
    path:'accueil',
    component : AccueilComponent
  },
  {
    path:'inscription',
    component : InscriptionComponent
  },
  {
    path:'utilisateur',
    component : UtilisateursComponent
  },
  {
    path:'',
    redirectTo:'/accueil',
    pathMatch:'full'
  },
  { path: 'admin', loadChildren: () => import('./admin/admin-manage/admin-manage.module').then(m => m.AdminManageModule) },
  {
    path : '**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
