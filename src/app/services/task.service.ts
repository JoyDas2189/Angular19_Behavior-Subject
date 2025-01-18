import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskSubject$ = new BehaviorSubject<Task[]>([]);
  tasks$ = this.taskSubject$.asObservable();

  addTask(task: Task) {
    debugger
    const tasks = this.taskSubject$.getValue();
    this.taskSubject$.next([...tasks, task])
  }

  updateTaskStatus(taskId: number, status: 'pending' | 'completed') {
    const tasks = this.taskSubject$.getValue();
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status } : task
    );
    this.taskSubject$.next(updatedTasks);
  }

  deleteTask(taskId: number) {
    const tasks = this.taskSubject$.getValue();
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    this.taskSubject$.next(updatedTasks);
  }
}
