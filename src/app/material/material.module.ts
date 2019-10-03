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
  MatExpansionModule
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
     MatExpansionModule
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
    MatExpansionModule
  ]
})
export class MaterialModule {}
