import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { HomeComponent } from './home/home.component';
import { CharacterCreateComponent } from './character/character-create/character-create.component';
import { AdventuresListComponent } from './adventures/adventures-list/adventures-list.component';
import { SessionComponent } from './adventures/session/session.component';
import { CreateAdventureComponent } from './adventures/create-adventure/create-adventure.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: HomeComponent },
      {
        path: 'characters', children: [
          { path: '', component: CharacterListComponent },
          { path: 'create', component: CharacterCreateComponent }
        ]
      },
      {
        path: 'adventures', children: [
          { path: '', component: AdventuresListComponent },
          { path: 'join', component: SessionComponent }, 
          { path: 'create', component: CreateAdventureComponent }
        ]
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rootRouterConfig, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
