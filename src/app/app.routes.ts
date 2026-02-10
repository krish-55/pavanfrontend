import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AddUserComponent } from './components/add-user/add-user.component';



export const routes: Routes = [

  { path: 'users', component: UserListComponent },

  { path: 'add-user', component: AddUserComponent }, 

  { path: 'edit-user/:id', component: UserEditComponent },

  { path: '', redirectTo: 'users', pathMatch: 'full' }

];
