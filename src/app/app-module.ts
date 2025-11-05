import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { MaterialModule } from './material/material-module';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    App,
    Header
  ],
  imports: [
    BrowserModule, //import the browser module
    AppRoutingModule, //import the app routing module
    MaterialModule, //import the material module
    ReactiveFormsModule,
    // HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),  //provide global error listeners for the browser
    provideHttpClient()
  ],
  bootstrap: [App] //bootstrap the app component
})
export class AppModule { }
