import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-manage-task',
  templateUrl: './manage-task.component.html',
  styleUrls: ['./manage-task.component.less']
})
export class ManageTaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  public typed: string;

  public tasks: Task[];

  public id = 1;

  public getTasks(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => this.tasks = tasks);
  }

  public addTask(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      if (this.typed !== '') {
        this.taskService.addTask({
          content: this.typed,
          id: this.id
        }).subscribe(() => {
          this.getTasks();
          this.id++;
        });
      }
    }
  }

  public deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => {
      this.getTasks();
      this.id--;
    });
  }

  public onInput(event: KeyboardEvent, task: Task) {
    if (task.content === '' && event.key === 'Enter') {
      this.deleteTask(task);
    }
  }

  public updateTasks(task: Task): void {
    this.taskService.updateTasks(task).subscribe(() => {
      this.getTasks();
    });
  }

  public ngOnInit() {
    this.getTasks();
  }

}
