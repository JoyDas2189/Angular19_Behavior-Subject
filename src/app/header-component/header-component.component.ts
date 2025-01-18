import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-component',
  imports: [CommonModule],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.scss'
})
export class HeaderComponentComponent implements OnInit{
  userInfo: {
    id: number;
    name: string;
    gender: string;
    email: string;
  } | null = null;

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.userService.user$.subscribe((user) => {
        this.userInfo = user;
      })
  }
}
