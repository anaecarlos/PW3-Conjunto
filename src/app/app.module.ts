import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrasesComponent } from './frases/frases.component';
import { BiscoitoComponent } from './biscoito/biscoito.component';
import { ConjuntoComponent } from './conjunto/conjunto.component';


@NgModule({
  declarations: [
    AppComponent,
    FrasesComponent,
    BiscoitoComponent,
    ConjuntoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
