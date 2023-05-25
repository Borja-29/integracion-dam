import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-novena-gen',
  templateUrl: './pokemon-novena-gen.component.html'
})
export class PokemonNovenaGenComponent implements OnInit{

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
   this.cargarPokemonNovenaGen();
  }

  cargarPokemonNovenaGen(): void{
    this.pokemonService.getPokemonsNovenaGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }
}