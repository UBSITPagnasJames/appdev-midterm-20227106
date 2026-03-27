import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail {
  constructor(public route: ActivatedRoute) {}
}
