import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <mat-card class="home mat-elevation-z4 container">
      <mat-card-title class="title">
        Welcome!
      </mat-card-title>
      <mat-card-subtitle class="subtitle">
        Task Management System!
      </mat-card-subtitle>
      <button (click)="start()">
          START
      </button>
    </mat-card>
  `,
  styles: [`
    .container {
      margin: 50px auto 0px;
      width: 90%;
      height: 300px;
      background-color: rgb(255, 255, 255);
    }

    .title {
      font-size: 3rem;
      font-weight: 300;
      line-height: 1.2;
      color: rgb(240, 23, 23);
      margin: 50px auto 30px;
    }

    .subtitle {
      font-size: 1.5rem;
      text-align: center;
      text-decoration: underline;
      color: rgb(240, 23, 23);
    }

    button {
      width: 100px;
      margin: auto;
      padding: 10px;
      color: rgb(255, 255, 255);
      font-weight: 700;
      background-color: rgb(240, 23, 23);
      border-radius: 5px;
      cursor: pointer;
    }

    button:active {
      background-color: rgb(240, 23, 23, .5);
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit(): void {
      
  }

  start(): void {
    this.router.navigate(['./tasks'])
  }
}
