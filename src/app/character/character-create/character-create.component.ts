import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { CharacterAttribute } from 'src/app/models/character-attribute.model';
import { Observable } from 'rxjs';
import { CharacterRace } from 'src/app/models/character-race.model';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css']
})
export class CharacterCreateComponent implements OnInit {
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  customizableAttributes: Observable<CharacterAttribute[]>
  baseAttributes:CharacterAttribute[];
  charRaces: Observable<CharacterRace[]>;
  constructor(private db: AngularFirestore, private authService: AuthService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.formGroup2 = new FormGroup({});
    this.formGroup1 = new FormGroup({
      name: new FormControl('', [Validators.required]),
      race: new FormControl('', [Validators.required])
    });

    this.charRaces = this.db.collection<CharacterRace>('races').valueChanges();
    this.customizableAttributes = this.db.collection<CharacterAttribute>('character-attributes', col => col.where('base', '==', false).orderBy('order')).valueChanges();
    this.db.collection<CharacterAttribute>('character-attributes', col => col.where('base', '==', true).orderBy('order')).valueChanges().subscribe(x => {
      this.baseAttributes = x;
    });

    this.customizableAttributes.subscribe(x => {
      const formAttr = {};
      x.map(attr => {
        formAttr[attr.name] = new FormControl('', [Validators.max(20), Validators.min(0), Validators.required])
      });
      this.formGroup2 = new FormGroup(formAttr);
    })
  }

  randomStat(formControlName: string) {
    this.formGroup2.get(formControlName).setValue(Math.floor(Math.random() * 20) + 1)
  }

  createCharacter() {
    const char = {
      ...this.formGroup1.value,
      attributes: {...this.formGroup2.value}
  };
    char[this.authService.getCurrentUser().uid] = true;
    this.baseAttributes.forEach(attr => char.attributes[attr.name] = attr.defaultValue);

    const charRef = this.db.collection('characters').add(char).then(x => {
      char['characterId'] = x.id;
      x.set(char);
      this.snack.open('Your character has been saved!', null, {duration: 2000});
      this.router.navigate(['/dashboard/characters']);
    });
  }

}
