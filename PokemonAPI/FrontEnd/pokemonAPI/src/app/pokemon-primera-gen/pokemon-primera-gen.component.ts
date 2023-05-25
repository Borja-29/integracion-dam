import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon/pokemon.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-pokemon-primera-gen',
  templateUrl: './pokemon-primera-gen.component.html'
})
export class PokemonPrimeraGenComponent implements OnInit{

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
   this.cargarPokemonPrimeraGen();
  }

  cargarPokemonPrimeraGen(): void{
    this.pokemonService.getPokemonsPrimeraGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }
}