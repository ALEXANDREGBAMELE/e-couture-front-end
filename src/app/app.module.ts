import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { ModeleArticleComponent } from './components/modele-article/modele-article.component';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { BaniereComponent } from './components/baniere/baniere.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import {CardModule} from 'primeng/card';
import { GaleryComponent } from './components/galery/galery.component';
import { DetailsComponent } from './components/details/details.component';
import {DividerModule} from "primeng/divider";
import { FooterComponent } from './components/footer/footer.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { UtilisateursComponent } from './admin/pages/utilisateurs/utilisateurs.component';
import { ProduitsComponent } from './admin/pages/produits/produits.component';
import {ProduitService} from "./shared/services/produit.service";
import {TableModule} from "primeng/table";
import {RatingModule} from 'primeng/rating';
import {FormsModule} from "@angular/forms";
import {TreeTableModule} from "primeng/treetable";
import {ToastModule} from "primeng/toast";
import {ContextMenuModule} from "primeng/contextmenu";
import {MultiSelectModule} from "primeng/multiselect";
import { TousArticlesComponent } from './pages/tous-articles/tous-articles.component';
import { ProcessComponent } from './components/process/process.component';
import { TendanceComponent } from './components/tendance/tendance.component';
import { TimelineModule } from 'primeng/timeline';
import { NewLettersComponent } from './components/new-letters/new-letters.component';
import { AtelierPageComponent } from './pages/atelier-page/atelier-page.component';
import { AtelierComponent } from './components/atelier/atelier.component';
import { AproposComponent } from './pages/apropos/apropos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConnexionComponent,
    ModeleArticleComponent,
    BaniereComponent,
    AccueilComponent,
    GaleryComponent,
    DetailsComponent,
    FooterComponent,
    PagenotfoundComponent,
    InscriptionComponent,
    UtilisateursComponent,
    ProduitsComponent,
    TousArticlesComponent,
    ProcessComponent,
    TendanceComponent,
    NewLettersComponent,
    AtelierPageComponent,
    AtelierComponent,
    AproposComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    InputTextModule,
    InputNumberModule,
    PasswordModule,
    GalleriaModule,
    CarouselModule,
    TagModule,
    CardModule,
    DividerModule,
    TableModule,
    RatingModule,
    FormsModule,
    TreeTableModule,
    ToastModule,
    ContextMenuModule,
    MultiSelectModule,
    TimelineModule,
   
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent],
  exports: [
    UtilisateursComponent
  ]
})
export class AppModule { }
