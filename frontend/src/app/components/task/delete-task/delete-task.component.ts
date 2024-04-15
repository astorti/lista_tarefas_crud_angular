import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-delete-task',
  template: `
  <mat-card class="container">
    <mat-card-title class="title">Delete Task</mat-card-title>
    <section>
      <form>
        <mat-form-field>
          <input matInput placeholder="Task" [(ngModel)]='task.task' name="task" disabled="">
        </mat-form-field>
      </form>
      <section class="actions-buttons">
        <button class="delete" mat-raised-button (click)="deleteTask()">
          Delete
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

  .delete {
    border: 2px solid #df4848;
    background-color: transparent;
  }

  .delete:active {
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
export class DeleteTaskComponent implements OnInit{

  task: Task = {
    task: ''
  }

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.taskService.readById(id).subscribe(task => {
      this.task = task
    })
    console.log(id)
  }

  deleteTask(): void {
    this.taskService.delete(this.task.id).subscribe(() => {
      this.taskService.showMessage("Task deleted successfully!")
      this.router.navigate(['./tasks'])
    })
  }

  cancel(): void {
    this.router.navigate(['./tasks'])
  }
}
