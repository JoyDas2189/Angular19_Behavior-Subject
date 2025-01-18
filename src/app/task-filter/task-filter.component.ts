import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-filter',
  imports: [CommonModule,FormsModule],
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.scss'
})
export class TaskFilterComponent implements OnInit{
  filteredTasks: Task[] = [];
  allTasks: Task[] = [];
  constructor(
    private taskService: TaskService
  ){}

  ngOnInit(): void {
      this.taskService.tasks$.subscribe((tasks) => {
        this.allTasks = tasks;
        this.filteredTasks = tasks;
      })
  }

  filterTask(status: 'all' | 'completed' | 'pending') {
    if(status === 'all') {
      this.filteredTasks = this.allTasks
    }
    else {
      this.filteredTasks = this.allTasks.filter((task) => task.status === status);
    }
  }
}
