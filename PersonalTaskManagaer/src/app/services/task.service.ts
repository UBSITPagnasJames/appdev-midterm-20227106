import { Injectable } from '@angular/core';
import { Taskmodel } from '../Models/task.model';

@Injectable({
  providedIn: 'root',
})
export class Task {
  private tasks: Taskmodel[] = [];
  private nextId = 1;
  getTasks(): Taskmodel[] {
    return this.tasks;
  }

  getTask(id: number): Taskmodel | undefined {
    return this.tasks.find(task => task.id === id);
  }

  addTask(task: Taskmodel) {
    task.id = this.nextId++;
    this.tasks.push(task);
  }

  updateTask(updatedTask: Taskmodel) {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) this.tasks[index] = updatedTask;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  } 
}

