import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { MatDialog } from '@angular/material';
import { CharacterCreateComponent } from '../character-create/character-create.component';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(private authService: AuthService, private dialog: MatDialog ) { }

  ngOnInit() {
    console.log(this.authService.getCurrentUser());
  }

}
