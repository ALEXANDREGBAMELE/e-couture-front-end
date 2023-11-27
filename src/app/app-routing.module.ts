import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './core/components/pagenotfound/pagenotfound.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public-routing.module').then(m => m.PublicRoutingModule),

  },
  {
    path: "**",
    component: PagenotfoundComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
