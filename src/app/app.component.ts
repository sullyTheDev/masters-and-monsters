import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Masters and Monsters';
  user: User

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser()
  }
}
