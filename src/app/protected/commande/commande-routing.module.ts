import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecapCommandeComponent } from './components/recap-commande/recap-commande.component';

const routes: Routes = [
  {
    path: "",
    component: RecapCommandeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
