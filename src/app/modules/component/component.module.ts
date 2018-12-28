import { NgModule } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { HomeComponent } from '../../home/home.component';
import { CarouselComponent } from '../../carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NgxModule } from '../ngx/ngx.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MainComponent } from '../../main/main.component';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { AccordinComponent } from '../../accordin/accordin.component';
import { NgIfDelayDirective } from '../../directives/ng-if-delay.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    MainComponent,
    SidenavComponent,
    AccordinComponent,
    NgIfDelayDirective
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    MaterialModule,
    NgxModule
  ],
  exports: [
    MainComponent
  ]
})
export class ComponentModule { }

// ng g c -- -m modules/component/component.module.ts