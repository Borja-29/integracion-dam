import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-cuarta-gen',
  templateUrl: './pokemon-cuarta-gen.component.html'
})
export class PokemonCuartaGenComponent implements OnInit{

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
   this.cargarPokemonCuartaGen();
  }

  cargarPokemonCuartaGen(): void{
    this.pokemonService.getPokemonsCuartaGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }
}