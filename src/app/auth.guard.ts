import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    private router: Router
  ) {}

  canActivateChild() {
      if (this.authService.authenticated) {
        return true;
      }
      console.log('access denied');
      this.router.navigate(['/login']);
      return false;
  }
  
}
