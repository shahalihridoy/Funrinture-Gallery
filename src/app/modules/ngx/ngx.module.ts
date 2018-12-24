import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    // if there is forRoot() then first import and next export
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports:[
    BsDropdownModule,
    CarouselModule
  ]
})
export class NgxModule { }
