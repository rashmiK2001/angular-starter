import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { routes as routeConstants } from '../../constants/routes';

const { ADD, EDIT } = routeConstants

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: ADD, component: UpdateUserComponent },
  { path: `${EDIT}/:id`, component: UpdateUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
