import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Session } from 'src/app/models/session.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  sessions: Observable<Session[]>;
  user: firebase.User;
  constructor(private authService: AuthService, private db: AngularFirestore) { }

  ngOnInit() {
    this.authService.afAuth.authState.subscribe(x => {
      this.user = x ? x : null;
      this.sessions = this.db.collection<Session>('sessions', opts => opts.where('creator', '==', this.user.uid)).valueChanges();
    })
    
  }

}
