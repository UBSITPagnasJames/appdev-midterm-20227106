import { Component } from '@angular/core';
import { RouterLink } from '../../../../node_modules/@angular/router/types/_router_module-chunk';
import { Task } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = this.taskService.getTasks();

  constructor(private taskService: TaskService) {}

  delete(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
}
