import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from './modules/component/component.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AccordinComponent } from "./components/accordin/accordin.component";
import { NgIfDelayDirective } from './directives/ng-if-delay.directive';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MaterialModule } from './modules/material/material.module';
import { NgxModule } from './modules/ngx/ngx.module';
import { CarouselDirective } from './directives/carousel.directive';
import { ProductsComponent } from './products/products.component';
import { RoutingModule } from './modules/routing/routing.module';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

  @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    SidenavComponent,
    AccordinComponent,
    NgIfDelayDirective,
    CarouselDirective,
    ProductsComponent,
    ProductPreviewComponent,
    SpinnerComponent
  ],  
  entryComponents: [
    ProductPreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SlickCarouselModule,
    MaterialModule,
    NgxModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// app-module => component-module => material-module + ngx-module