import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit{
  tasks: Task[] = [];
  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
      this.taskService.tasks$.subscribe((tasks) => {
        this.tasks = tasks
        console.log("tasks", tasks);
        
      })
  }

  markAsCompleted(taskId: number) {
    this.taskService.updateTaskStatus(taskId, 'completed');
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }

}
