import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { MenubarModule } from 'primeng/menubar';
import { FooterComponent } from './shell/layout/footer/footer.component';
import { NavbarComponent } from './shell/layout/navbar/navbar.component';
import { NewLettersComponent } from './shell/layout/new-letters/new-letters.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    NewLettersComponent,
    PagenotfoundComponent,
  ],
  exports: [FooterComponent, NavbarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MenubarModule,
  ]
})
export class CoreModule { }
