import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageTaskComponent } from './manage-task/manage-task.component';

const routes: Routes = [
  {
    path: 'manage-task',
    component: ManageTaskComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'manage-task'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
