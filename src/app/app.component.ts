import { Component } from '@angular/core';
import { LoginComponentComponent } from "./login-component/login-component.component";
import { HeaderComponentComponent } from "./header-component/header-component.component";
import { ProfileComponentComponent } from "./profile-component/profile-component.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskCreatorComponent } from "./task-creator/task-creator.component";
import { TaskFilterComponent } from './task-filter/task-filter.component';

@Component({
  selector: 'app-root',
  imports: [TaskListComponent, TaskCreatorComponent, TaskFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'behavior-subject';
}
