import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  template: `
    <mat-card class="container">
      <mat-card-title class="title">New Task</mat-card-title>
      <section>
        <form>
          <mat-form-field>
            <input matInput placeholder="Task" [(ngModel)]='task.task' name="task">
          </mat-form-field>
        </form>
        <section class="actions-buttons">
          <button class="save" mat-raised-button (click)="createTask()">
            Save
          </button>
          
          <button class="cancel" mat-raised-button (click)="cancel()">
            Cancel
          </button>
        </section>
      </section>
    </mat-card>
  `,
  styles: [`
    .container {
      padding: 25px;
    }

    form {
      margin-left: 20px
    }

    .title {
      margin-left:20px;
      margin-bottom: 20px; 
    }

    .actions-buttons {
      margin-left: 20px;
    }

    button {
      width: 70px;
      padding: 5px;
      margin-right: 10px;
      border-radius: 5px;
      color: #FFF;
      cursor: pointer;
    }

    .save {
      border: 2px solid #87d49d;
      background-color: transparent;
    }

    .save:active {
      color: transparent;
    }

    .cancel {
      border: 2px solid #5dc0f5;
      background-color: transparent;
    }

    .cancel:active {
      color: transparent;
    }
  `
  ]
})
export class CreateTaskComponent implements OnInit {

  task: Task = {
    id: undefined,
    task: ''
  }
  
  constructor(private taskService: TaskService, private router: Router) { }
  
  ngOnInit(): void {
  }

  createTask(): void {
    this.taskService.create(this.task).subscribe(() => {
      this.taskService.showMessage('New task recorded successfully!')
      this.router.navigate(['./tasks'])
    })
  }

  cancel(): void {
    this.router.navigate(['./tasks'])
  }
}
