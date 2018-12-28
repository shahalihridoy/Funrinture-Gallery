import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
  MatIconModule,
  MatRippleModule,
  MatSelectModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatTabsModule,
  MatInputModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatChipsModule,
  MatPaginatorModule,
  MatSidenavModule
} from '@angular/material';

@NgModule({
  imports: [
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    MatFormFieldModule,
    MDBBootstrapModule,
    // MatAutocompleteModule,
    MatButtonModule,
    // MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    // MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    // MatGridListModule,
    MatIconModule,
    MatInputModule,
    // MatListModule,
    MatMenuModule,
    // MatNativeDateModule,
    MatPaginatorModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSnackBarModule,
    // MatSortModule,
    // MatStepperModule,
    // MatTableModule,
    MatTabsModule,
    MatToolbarModule
    // MatTooltipModule,
  ]
})
export class MaterialModule { }
