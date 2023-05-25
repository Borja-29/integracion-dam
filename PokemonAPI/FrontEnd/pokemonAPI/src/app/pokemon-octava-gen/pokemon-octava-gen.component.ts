import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-octava-gen',
  templateUrl: './pokemon-octava-gen.component.html'
})
export class PokemonOctavaGenComponent implements OnInit{

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
   this.cargarPokemonOctavaGen();
  }

  cargarPokemonOctavaGen(): void{
    this.pokemonService.getPokemonsOctavaGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }
}