import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './task-edit.html',
  styleUrl: './task-edit.css',
})
export class TaskEdit {
  task: any;

  constructor(
    private route: ActivatedRoute,
    private service: Task,
    private router: Router
  ) {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.task = { ...this.service.getTask(id) };
  }

  save() {
    this.service.updateTask(this.task);
    this.router.navigate(['/']);
  }
}
