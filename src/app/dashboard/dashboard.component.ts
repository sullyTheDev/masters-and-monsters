import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Masters and Monsters';
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.signOutCurrentUser();
  }
}
