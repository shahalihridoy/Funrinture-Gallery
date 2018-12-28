import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from './modules/component/component.module';
import { FormsModule } from '@angular/forms';

  @NgModule({
  declarations: [
    AppComponent
  ],  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// app-module => component-module => material-module + ngx-module