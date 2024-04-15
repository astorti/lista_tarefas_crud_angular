import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TaskListComponent } from './views/task-list/task-list.component';
import { CreateTaskComponent } from './components/task/create-task/create-task.component';
import { UpdateTaskComponent } from './components/task/update-task/update-task.component';
import { DeleteTaskComponent } from './components/task/delete-task/delete-task.component';

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
  },
  {
    path: "tasks/delete/:id",
    component: DeleteTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
