import { ThoughtsListComponent } from './components/thoughts/thoughts-list/thoughts-list.component';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { UpdateThoughtComponent } from './components/thoughts/update-thought/update-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'thoughtList',
    pathMatch: 'full'
  },
  {
    path: 'createThought',
    component: CreateThoughtComponent
  },
  {
    path:'thoughtList',
    component: ThoughtsListComponent
  },
  {
    path:'thoughts/deleteThought/:id',
    component: DeleteThoughtComponent
  },
  {
    path:'thoughts/updateThought/:id',
    component: UpdateThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
