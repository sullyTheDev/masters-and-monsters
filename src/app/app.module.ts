import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { AuthService } from './auth.service';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { HomeComponent } from './home/home.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { CharacterCreateComponent } from './character/character-create/character-create.component';
import { AdventuresListComponent } from './adventures/adventures-list/adventures-list.component';
import { SessionComponent } from './adventures/session/session.component';
import { CreateAdventureComponent } from './adventures/create-adventure/create-adventure.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CharacterListComponent,
    HomeComponent,
    CharacterDetailComponent,
    CharacterCreateComponent,
    AdventuresListComponent,
    SessionComponent,
    CreateAdventureComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [CharacterCreateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
