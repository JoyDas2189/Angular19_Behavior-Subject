import { Component } from '@angular/core';
import { LoginComponentComponent } from "./login-component/login-component.component";
import { HeaderComponentComponent } from "./header-component/header-component.component";
import { ProfileComponentComponent } from "./profile-component/profile-component.component";

@Component({
  selector: 'app-root',
  imports: [LoginComponentComponent, HeaderComponentComponent, ProfileComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'behavior-subject';
}
