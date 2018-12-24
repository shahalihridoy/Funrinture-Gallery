import { NgModule } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { HomeComponent } from '../../home/home.component';
import { CarouselComponent } from '../../carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NgxModule } from '../ngx/ngx.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    MaterialModule,
    NgxModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent
  ]
})
export class ComponentModule { }
