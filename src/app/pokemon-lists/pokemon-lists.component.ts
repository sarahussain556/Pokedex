import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-lists',
  templateUrl: './pokemon-lists.component.html',
  styleUrls: ['./pokemon-lists.component.css']
})
export class PokemonListsComponent implements OnInit {

  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons()
    .subscribe((response:any)=>{
      console.log(response);
    })
  }

}
