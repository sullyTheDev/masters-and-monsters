import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { CharacterAttribute } from 'src/app/models/character-attribute.model';
import { MatDialog } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  user: firebase.User;
  characters: Observable<Character[]>;
  baseCharacterStats: Observable<CharacterAttribute[]>;

  @ViewChild('confirmDel') confirmDel: TemplateRef<any>;
  constructor(private authService: AuthService, private db: AngularFirestore, private dialog: MatDialog) { }
  ngOnInit() {
    this.authService.afAuth.authState.subscribe(x => {
      this.user = x ? x : null;
      this.characters = this.db.collection<Character>('characters', opts => opts.where(this.user.uid, '==', true)).valueChanges(); 
    });

    this.baseCharacterStats = this.db.collection<CharacterAttribute>('character-attributes', opts => opts.where('base', '==', true).orderBy('order')).valueChanges();
  }

  deleteChar(charId: string) {
    let listen = new Subject();
    this.db.doc<Character>(`characters/${charId}`).valueChanges().pipe(takeUntil(listen)).subscribe(x => {
      const diagRef = this.dialog.open(this.confirmDel, {data: {charName: x.name}});
      diagRef.afterClosed().subscribe(x => {
        if (x) {
          this.db.doc<Character>(`characters/${charId}`).delete();
          listen.next();
          listen.complete();
        }
      })
    })
  }

}
