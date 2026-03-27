import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = this.taskService.getTasks();

  constructor(private taskService: Task) {}

  delete(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
}
