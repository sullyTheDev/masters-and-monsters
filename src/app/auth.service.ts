import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: firebase.User = null
  constructor(public afAuth: AngularFireAuth, private router: Router){
    afAuth.authState.subscribe(x => {
      this.user = x;
    });
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  loginWithEmailAndPassword(email: string, password: string ) {
    this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password)).pipe(tap(x => this.user = x.user));
  }

  registerWithEmailAndPassword(email: string, password: string) {
    this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
    return from(this.afAuth.auth.createUserWithEmailAndPassword(email, password)).pipe(tap(x => this.user = x.user));
  }

  getCurrentUser() {
    
    return this.afAuth.auth.currentUser
  }

  signOutCurrentUser() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
}
