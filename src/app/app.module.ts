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
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedService } from './services/shared-service.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent, pathMatch: 'full'},
  { path: 'invoice/:id', component: InvoiceDetailsComponent, pathMatch: 'full'},
  { path: 'invoice', component: InvoiceListComponent, pathMatch: 'full'},
];


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
    SpinnerComponent,
    InvoiceListComponent,
    InvoiceDetailsComponent
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
    RoutingModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: false })
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// app-module => component-module => material-module + ngx-module