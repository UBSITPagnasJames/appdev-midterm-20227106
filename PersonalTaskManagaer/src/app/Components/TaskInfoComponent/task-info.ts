import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../services/task.service';

@Component({
  selector: 'app-task-info',
  imports: [],
  templateUrl: './task-info.html',
  styleUrl: './task-info.css',
})
export class TaskInfo {
  task: any;

  constructor(private route: ActivatedRoute, private service: Task) {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.task = this.service.getTask(id);
  }
}
