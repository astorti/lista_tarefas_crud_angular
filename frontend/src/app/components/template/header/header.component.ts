import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div>
      <mat-toolbar class="header mat-elevation-z4" appRedColor>
        <h1 class="text-title">TASK LIST</h1>
        <span>
          <a mat-list-item routerLink="/">
            <i class="material-icons">home</i>
            <p>Home</p>
          </a>
          <a mat-list-item routerLink="/">
            <i class="material-icons">task</i>
            <p>Tasks</p>
          </a>
        </span>
      </mat-toolbar>
    </div>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      height: 100px
    }

    .text-title {
      font-size: 25px;
    }

    span, a {
      display: flex;
      align-items: center;
    }

    a {
      width: 120px;
      height: 25px;
      text-decoration: none;
      color: #FFF;
      margin-right: 10px;
    }

    a:active {
      color: #FA0505;
    }

    P {
      margin-left: 5px
    }
  `
  ]
})
export class HeaderComponent {

}
