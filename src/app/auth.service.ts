import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { from } from 'rxjs';
import { FirebaseApp } from 'angularfire2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: firebase.User = null
  constructor(public afAuth: AngularFireAuth){
    afAuth.authState.subscribe(x => {
      this.user = x;
      console.log(x);
    })
  }

  get authenticated(): boolean {
    return this.user !== null;
  }

  loginWithEmailAndPassword(email: string, password: string ) {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }

  registerWithEmailAndPassword(email: string, password: string) {
    return from(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
  }

  getCurrentUser() {
    return this.user ? this.user : null;
  }
}
