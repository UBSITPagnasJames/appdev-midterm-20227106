import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  imports: [RouterLink, RouterOutlet, ActivatedRoute],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail {
  constructor(public route: ActivatedRoute) {}
}
