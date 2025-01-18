import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-creator',
  imports: [FormsModule],
  templateUrl: './task-creator.component.html',
  styleUrl: './task-creator.component.scss'
})
export class TaskCreatorComponent {
  taskTitle: string = '';
  constructor(
    private taskService: TaskService
  ) {}

  addTask() {
    this.taskService.addTask({
      id: Date.now(),
      name: this.taskTitle,
      status: 'pending',
    })
    this.taskTitle = '';
  }
}
