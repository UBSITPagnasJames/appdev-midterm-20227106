import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Task {
  private tasks: Task[] = [];
  private nextId = 1;
  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  addTask(task: Task) {
    task.id = this.nextId++;
    this.tasks.push(task);
  }

  updateTask(updatedTask: Task) {
    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) this.tasks[index] = updatedTask;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}

