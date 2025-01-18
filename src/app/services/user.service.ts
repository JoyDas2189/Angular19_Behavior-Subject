import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  id: number;
  name: string;
  gender: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  behaviorSubject$ = new BehaviorSubject<User | null>(null);

  user$ = this.behaviorSubject$.asObservable();

  updateUser(user: User) {
    this.behaviorSubject$.next(user);
  }

  clearUser() {
    this.behaviorSubject$.next(null)
  }
}
