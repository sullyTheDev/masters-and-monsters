import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Session } from 'src/app/models/session.model';
import { AuthService } from 'src/app/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-adventures-list',
  templateUrl: './adventures-list.component.html',
  styleUrls: ['./adventures-list.component.css']
})
export class AdventuresListComponent implements OnInit {

  sessions: Observable<Session[]>;
  user: firebase.User;
  @ViewChild('confirmDel') confirmDel: TemplateRef<any>;
  constructor(private authService: AuthService, private db: AngularFirestore, private dialog: MatDialog) { }

  ngOnInit() {
    this.authService.afAuth.authState.subscribe(x => {
      this.user = x ? x : null;
      this.sessions = this.db.collection<Session>('sessions', opts => opts.where('creator', '==', this.user.uid)).valueChanges();
    })
    
  }

  click(t: any) {
    console.log(t);
  }

  deleteSession(session: Session) {
      const diagRef = this.dialog.open(this.confirmDel, {data: {sesName: session.name}});
      diagRef.afterClosed().subscribe(x => {
        if (x) {
          this.db.doc<Session>(`sessions/${session.sessionId}`).delete();
        }
    })
  }

}
