import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule} from '@ngrx/store';
import { EffectsModule } from  '@ngrx/effects';

import { ShellComponent, NavComponent, WelcomeComponent } from './home';

import { AppComponent } from './app.component';
import { InterceptorsProviders } from './Interceptors';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './error';



@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    NavComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [
    InterceptorsProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
