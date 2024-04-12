import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-read-task',
  template: `
    <div class="container">
      <div class="mat-elevation-z8">
        <table mat-table [dataSource]="tasks">
          <!-- Id Column -->
          <ng-container matColumnDef="id">
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>
            <td mat-cell *matCellDef="let row">{{row.id}}</td>
          </ng-container>
      
          <!-- Name Column -->
          <ng-container matColumnDef="task">
            <th mat-header-cell *matHeaderCellDef mat-sort-header>Task</th>
            <td mat-cell *matCellDef="let row">{{row.task}}</td>
          </ng-container>

          <!-- Action Column -->
          <ng-container matColumnDef="action" >
            <th mat-header-cell *matHeaderCellDef>Actions</th>
            <td mat-cell *matCellDef="let row">
                <a routerLink="" class="edit">
                    <i class="material-icons ">
                        edit
                    </i>
                </a>
                <a routerLink="" class="delete">
                    <i class="material-icons ">
                        delete
                    </i>
                </a>
            </td>
          </ng-container>
      
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
      </div>
    </div>  
  `,
  styles: [`
    .container {
      width: 50%;
      margin: auto;
    }

    .edit {
      margin-right: 10px;
    }

    .edit > i {
      color: #f0e109;
    }

    .delete > i {
      color: #fa0505;
    }
    
  `]
})
  
export class ReadTaskComponent implements OnInit {
  
  tasks: Task[] = []
  displayedColumns = ['id', 'task', 'action'];
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.read().subscribe(tasks => {
      this.tasks = tasks
      console.log(tasks)
    })
  }
}
