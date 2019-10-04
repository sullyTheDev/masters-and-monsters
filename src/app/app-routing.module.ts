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
