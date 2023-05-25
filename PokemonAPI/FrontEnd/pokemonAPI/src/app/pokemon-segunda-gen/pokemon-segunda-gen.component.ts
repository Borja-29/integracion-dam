import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-segunda-gen',
  templateUrl: './pokemon-segunda-gen.component.html'
})
export class PokemonSegundaGenComponent  implements OnInit{

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
   this.cargarPokemonSegundaGen();
  }

  cargarPokemonSegundaGen(): void{
    this.pokemonService.getPokemonsSegundaGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }
}
