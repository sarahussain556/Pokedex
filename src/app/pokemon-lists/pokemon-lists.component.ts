import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-lists',
  templateUrl: './pokemon-lists.component.html',
  styleUrls: ['./pokemon-lists.component.css']
})
export class PokemonListsComponent implements OnInit {
  pokemons: any[]=[];
  imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons()
    .subscribe((response:any)=>{
      console.log(response.results);
      this.pokemons=[...response.results]
      console.log(this.pokemons);
      // response.results.forEach((result)=> {
      //   this.dataService.getPokemonInfo(result.id)
      //   .subscribe((response:any)=>{
      //     this.pokemons.push(response);
      //   })
      // });
    })
  }

}
