import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { IndexComponent } from './index/index.component';
import { CoreModule } from '../core/core.module';
import { ArticleModule } from './article/article.module';
import { HomeComponent } from './components/home/home.component';
import { BaniereComponent } from './components/baniere/baniere.component';
import { AtelierComponent } from './components/atelier/atelier.component';
import { ProcessComponent } from './components/process/process.component';
import { TendanceComponent } from './components/tendance/tendance.component';
import { TimelineModule } from 'primeng/timeline';
import { ModeleArticleComponent } from './components/modele-article/modele-article.component';



@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    BaniereComponent,
    AtelierComponent,
    ProcessComponent,
    TendanceComponent,
    ModeleArticleComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CoreModule,
    ArticleModule,
    TimelineModule,
  ]
})
export class PublicModule { }
