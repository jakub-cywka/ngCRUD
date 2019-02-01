import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './manage-task/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  public apiUrl = 'http://localhost:4200/api';

  public getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.apiUrl}/tasks`);
  }

  public deleteTask(task: Task): Observable<Task> {
    return this.httpClient.delete<Task>(`${this.apiUrl}/tasks/${task.id}`);
  }

  public addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${this.apiUrl}/tasks`, task);
  }

  public updateTasks(task: Task): Observable<Task[]> {
    return this.httpClient.put<Task[]>(`${this.apiUrl}/tasks`, task);
  }
}
