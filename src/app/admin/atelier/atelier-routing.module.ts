import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierIndexComponent } from './atelier-index/atelier-index.component';

const routes: Routes = [
  {
    path : "",
    component : AtelierIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtelierRoutingModule { }
