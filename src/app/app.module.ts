import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Four0fourComponent } from './four0four/four0four.component';
import { TokenInterceptorProvider } from './shared/interceptor/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    Four0fourComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, TokenInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
