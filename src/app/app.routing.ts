import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddProgramComponent} from "./add-program/add-program.component";
import {ListProgramComponent} from "./list-program/list-program.component";
import {EditProgramComponent} from "./edit-program/edit-program.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-program', component: AddProgramComponent },
  { path: 'list-program', component: ListProgramComponent },
  { path: 'edit-program', component: EditProgramComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
