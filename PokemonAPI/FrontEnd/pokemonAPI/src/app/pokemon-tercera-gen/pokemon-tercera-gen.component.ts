import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-tercera-gen',
  templateUrl: './pokemon-tercera-gen.component.html'
})
export class PokemonTerceraGenComponent implements OnInit{

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
   this.cargarPokemonTerceraGen();
  }

  cargarPokemonTerceraGen(): void{
    this.pokemonService.getPokemonsTerceraGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }
}