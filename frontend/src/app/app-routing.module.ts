import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TaskListComponent } from './views/task-list/task-list.component';
import { CreateTaskComponent } from './components/task/create-task/create-task.component';
import { UpdateTaskComponent } from './components/task/update-task/update-task.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "tasks",
    component: TaskListComponent
  },
  {
    path: "tasks/create",
    component: CreateTaskComponent
  },
  {
    path: "tasks/update/:id",
    component: UpdateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
