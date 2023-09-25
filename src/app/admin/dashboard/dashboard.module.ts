import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardsComponent } from './cards/cards.component';
import { CardModule } from 'primeng/card';
import { GrapheComponent } from './graphe/graphe.component';
// import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    CardsComponent,
    GrapheComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    // ChartModule,
  ]
})
export class DashboardModule { }
