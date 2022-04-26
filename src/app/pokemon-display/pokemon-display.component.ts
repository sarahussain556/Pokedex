
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Location } from '@angular/common';

type NavigationObject={
  navigationId:number;
}
type Ability={
  name:string;
}
@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.css']
})
export class PokemonDisplayComponent implements OnInit {

  // constructor(
  //  // private dataService:DataService
  // ) { }
  constructor(private location:Location,private dataService:DataService,public abilities:Array<string>){

  }


  ngOnInit(): void {
    
    let navigationObject=this.location.getState() as NavigationObject;
      console.log(navigationObject);
      this.dataService.getPokemonInfo(navigationObject.navigationId)
      .subscribe((response:any)=>{
        console.log(response);
        this.abilities=response.abilities.map((ability:Ability)=>{ return ability.name});
        
     // this.pokemons=[...response.results]
      //console.log(this.pokemons);
      })
  }

}
