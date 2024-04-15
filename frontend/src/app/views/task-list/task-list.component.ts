import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: `
    <span class="add">
      <a mat-list-item routerLink="/tasks/create">
        <i class="material-icons">add</i>
      </a>
    </span>
    <app-read-task></app-read-task>
  `,
  styles: [`
    .add i {
      display: flex;
      justify-content: flex-end;
      color: #FFF;
      padding: 10px;
      margin-top: 10px;
      margin-right: 50px;
      font-size: 30px
    }

    .add i:active {
      color: #424242
    }

    .add a {
      text-decoration: none;
    }
  `
  ]
})
export class TaskListComponent {

}
