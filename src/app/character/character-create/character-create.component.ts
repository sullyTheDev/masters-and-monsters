import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { CharacterAttribute } from 'src/app/models/character-attribute.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css']
})
export class CharacterCreateComponent implements OnInit {
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  baseAttributes: Observable<CharacterAttribute[]>;
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.formGroup1 = new FormGroup({
      charName: new FormControl('', [Validators.required])
    });


    this.baseAttributes = this.db.collection<CharacterAttribute>('character-attributes', col => col.where('base', '==', false).orderBy('order')).valueChanges();

    this.baseAttributes.subscribe(x => {
      const formAttr = {};
      x.map(attr => {
        formAttr[attr.name] = new FormControl('', [Validators.max(20), Validators.min(0), Validators.required])
      });
      this.formGroup2 = new FormGroup(formAttr);
    })
  }

}
