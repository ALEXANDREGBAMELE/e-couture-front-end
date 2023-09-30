import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { GrapheComponent } from './graphe/graphe.component';
import { CircleComponent } from './circle/circle.component';

const routes: Routes = [
  {
    path : "",
    component : CardsComponent
  },
  {
    path : "graph",
    component : GrapheComponent
  },
  {
    path : "circle",
    component : CircleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
