import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    private router: Router
  ) {}

  canActivate() {
    console.log(this.authService.authenticated);
      if (this.authService.authenticated) {
        return true;
      }
      console.log('access denied');
      this.router.navigate(['/login']);
      return false;
  }
  
}