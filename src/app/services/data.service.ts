import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) {
   }

   //get pokemon request
   getPokemons(){
     return this.http.get(`https://pokeapi.co/api/v2/pokemon/`);
   }


   getPokemonInfo(name: string){
     return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
   }
}
