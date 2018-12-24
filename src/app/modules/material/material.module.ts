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
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    MatIconModule,
    MatRippleModule,
    MatTabsModule,
    MatSelectModule,
    MatExpansionModule,
    MatFormFieldModule,
    MDBBootstrapModule,
    MatCheckboxModule,
    MatInputModule
  ]
})
export class MaterialModule { }
