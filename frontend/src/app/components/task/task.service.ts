import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map, catchError, EMPTY } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = "http://localhost:3001/tasks"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  read(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseUrl, task).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: string | null): Observable<Task>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Task>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/${task.id}`
    return this.http.put<Task>(url, task).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Something went wrong!', true)
    return EMPTY
  }
}
