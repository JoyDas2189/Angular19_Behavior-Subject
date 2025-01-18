import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-component',
  imports: [CommonModule],
  templateUrl: './profile-component.component.html',
  styleUrl: './profile-component.component.scss'
})
export class ProfileComponentComponent {
  userInfo: {
    id: number;
    name: string;
    gender: string;
    email: string;
  } | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      this.userInfo = user;
    })
  }

}
