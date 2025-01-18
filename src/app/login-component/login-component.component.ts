import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-component',
  imports: [CommonModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss'
})
export class LoginComponentComponent {
  userInfo = {
    id: 1, 
    name: 'Joy Das',
    gender: 'Male',
    email: 'joy.softifybd@gmail.com'
  }
  constructor(private userService: UserService){}
  login() {
    const user = this.userInfo;
    this.userService.updateUser(user)
  }

}
