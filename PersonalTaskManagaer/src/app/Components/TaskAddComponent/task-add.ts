import { Component } from '@angular/core';
import { FormsModule } from '@angular/FormsModule';
import { Task } from '../../services/task.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-add',
  imports: [FormsModule],
  templateUrl: './task-add.html',
  styleUrl: './task-add.css',
})
export class TaskAdd {
  task: any = {};

  constructor(private service: Task, private router: Router) {}

  addTask() {
    this.service.addTask(this.task);
    this.router.navigate(['/']);
  }
}
