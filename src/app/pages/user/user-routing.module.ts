import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { routes as routeConstants } from 'src/app/constants/routes';

const { ADD, EDIT } = routeConstants
const routes: Routes = [{ path: '', component: UserListComponent },
{ path: 'users', component: UpdateUserComponent },
{ path: `${EDIT}/:id`, component: UpdateUserComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
