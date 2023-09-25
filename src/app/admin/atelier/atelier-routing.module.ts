import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierIndexComponent } from './atelier-index/atelier-index.component';
import { AtelierAddComponent } from './atelier-add/atelier-add.component';
import { AtelierEditComponent } from './atelier-edit/atelier-edit.component';

const routes: Routes = [
  {
    path : "",
    component : AtelierIndexComponent
  },
  {
    path : "add",
    component : AtelierAddComponent
  },
  {
    path : "edit",
    component : AtelierEditComponent
  },
  {
    path : "add",
    component : AtelierAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtelierRoutingModule { }
