import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { PokemonListsComponent } from './pokemon-lists/pokemon-lists.component';
import { PokemonDisplayComponent } from './pokemon-display/pokemon-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListsComponent,
    PokemonDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
