import { NgModule } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { HomeComponent } from '../../home/home.component';
import { CarouselComponent } from '../../carousel/carousel.component';
import { MaterialModule } from '../material/material.module';
import { NgxModule } from '../ngx/ngx.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SidenavComponent } from '../../sidenav/sidenav.component';
import { AccordinComponent } from '../../accordin/accordin.component';
import { NgIfDelayDirective } from '../../directives/ng-if-delay.directive';
import { AppComponent } from '../../app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    SidenavComponent,
    AccordinComponent,
    NgIfDelayDirective
  ],
  imports: [
    SlickCarouselModule,
    MaterialModule,
    NgxModule
  ],
  exports: [
    // AppComponent
  ]
})
export class ComponentModule { }

// ng g c -- -m modules/component/component.module.ts