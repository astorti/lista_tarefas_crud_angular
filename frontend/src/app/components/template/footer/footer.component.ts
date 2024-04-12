import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <mat-toolbar class="footer">
      <p>Made with</p>
      <p class="angular">Angular</p>
    </mat-toolbar>
  `,
  styles: [`
    .footer {
      display: flex;
      justify-content: flex-end;
      font-weight: 300;
      font-size: .8rem;
      height: 30px;
      position: fixed;
      bottom: 0;
      background-color: rgb(240, 23, 23, 0.5);
    }

    .angular {
      margin-left: 7px;
      color: rgb(240, 23, 23);
      font-weight: 700;
    }
  `
  ]
})
export class FooterComponent {

}
