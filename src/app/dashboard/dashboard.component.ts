import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Session } from '../models/session.model';
import { first } from 'rxjs/operators';
import * as firebase from 'firebase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Masters and Monsters';
  user: firebase.User;
  constructor(private authService: AuthService, private db: AngularFirestore) { }

  ngOnInit() {
    this.authService.afAuth.authState.subscribe(x => {
      this.user = x ? x : null;
    })
  }

  logout() {
    if (this.user) {
      this.db.collection<Session>('sessions', opts => opts.where(`users.${this.user.uid}.userId`, '==', this.user.uid)).get().pipe(first()).subscribe(sessions => {
        sessions.docs.forEach(ses => {
          const update = {};
          update[`users.${this.user.uid}`] = firebase.firestore.FieldValue.delete();
          ses.ref.update(update);
        });
      this.authService.signOutCurrentUser(); 
      });
    } else {
      this.authService.signOutCurrentUser();
    }
  }
}
