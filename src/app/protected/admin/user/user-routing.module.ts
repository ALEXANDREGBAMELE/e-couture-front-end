import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { UserIndexComponent } from './user-index/user-index.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AdminComponent } from '../admin.component';

const routes: Routes = [
  {
    path:"", component: UserIndexComponent
  },
  {
    path:"add", component: UserAddComponent
  },
  {
    path:"edit/:id", component: UserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
