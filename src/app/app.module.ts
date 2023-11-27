import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { ConnexionComponent } from './auth/components/connexion/connexion.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import {CardModule} from 'primeng/card';
import {DividerModule} from "primeng/divider";
import { InscriptionComponent } from './auth/components/inscription/inscription.component';
import {ProduitService} from "./shared/services/produit.service";
import {TableModule} from "primeng/table";
import {RatingModule} from 'primeng/rating';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TreeTableModule} from "primeng/treetable";
import {ToastModule} from "primeng/toast";
import {ContextMenuModule} from "primeng/contextmenu";
import {MultiSelectModule} from "primeng/multiselect";
import { TimelineModule } from 'primeng/timeline';
import { AproposComponent } from './public/components/apropos/apropos.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { ProtectedModule } from './protected/protected.module';
import { PublicModule } from './public/public.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AproposComponent,
    InscriptionComponent,
    
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
    ReactiveFormsModule,
    HttpClientModule,
    ProtectedModule,
    PublicModule,
    CardModule,
    AuthModule,
   
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent],
  exports: [
    SharedModule
  ]
})
export class AppModule { }
