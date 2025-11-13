import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {NgParticlesModule} from "ng-particles";
import { IntroductionComponent } from './components/introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
