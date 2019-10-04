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
  MatTooltipModule,
  MatListModule,
  MatExpansionModule,
  MatStepperModule,
  MatDialogModule
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
     MatTooltipModule,
     MatListModule,
     MatExpansionModule,
     MatStepperModule,
     MatDialogModule
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
    MatTooltipModule,
    MatListModule,
    MatExpansionModule,
    MatStepperModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
