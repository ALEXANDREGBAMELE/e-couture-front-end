import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtelierRoutingModule } from './atelier-routing.module';
import { AtelierIndexComponent } from './atelier-index/atelier-index.component';
import { AtelierAddComponent } from './atelier-add/atelier-add.component';
import { AtelierEditComponent } from './atelier-edit/atelier-edit.component';
import { AtelierDeleteComponent } from './atelier-delete/atelier-delete.component';


@NgModule({
  declarations: [
    AtelierIndexComponent,
    AtelierAddComponent,
    AtelierEditComponent,
    AtelierDeleteComponent
  ],
  imports: [
    CommonModule,
    AtelierRoutingModule
  ]
})
export class AtelierModule { }
