import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task } from '../../services/task.service';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks: any[] = [];

constructor(private taskService: Task) {
  this.tasks = this.taskService.getTasks();
}

  delete(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
}
