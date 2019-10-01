import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatTabsModule,
  MatIconModule,
  MatMenuModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
     MatSnackBarModule,
     MatTabsModule,
     MatIconModule,
     MatMenuModule,
     MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}
