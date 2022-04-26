import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDisplayComponent } from './pokemon-display/pokemon-display.component';

const routes: Routes = [
  {path:'pokemon.name', redirectTo:'pokemon-display'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
