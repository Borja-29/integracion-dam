import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-quinta-gen',
  templateUrl: './pokemon-quinta-gen.component.html'
})
export class PokemonQuintaGenComponent implements OnInit{

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
   this.cargarPokemonQuintaGen();
  }

  cargarPokemonQuintaGen(): void{
    this.pokemonService.getPokemonsQuintaGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }
}