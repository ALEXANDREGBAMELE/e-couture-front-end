import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { RecapCommandeComponent } from './components/recap-commande/recap-commande.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { RecuComponent } from './components/recu/recu.component';
import { PanierComponent } from './components/panier/panier.component';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    RecapCommandeComponent,
    PaiementComponent,
    RecuComponent,
    PanierComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    ButtonModule,
    ProgressSpinnerModule,
    TableModule

  ]
})
export class CommandeModule { }
