import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { InterceptorsProviders } from './Interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    InterceptorsProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
