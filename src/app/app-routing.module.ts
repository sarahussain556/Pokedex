import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDisplayComponent } from './pokemon-display/pokemon-display.component';
import { PokemonListsComponent } from './pokemon-lists/pokemon-lists.component';

const routes: Routes = [{path:'pokeman', component:PokemonListsComponent},
{path:'pokeman/:name', component:PokemonDisplayComponent},
{ path: '**', redirectTo: 'pokeman' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
