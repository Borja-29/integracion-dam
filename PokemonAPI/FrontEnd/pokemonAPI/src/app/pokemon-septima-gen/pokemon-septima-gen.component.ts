import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-septima-gen',
  templateUrl: './pokemon-septima-gen.component.html'
})
export class PokemonSeptimaGenComponent implements OnInit{

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
   this.cargarPokemonSeptimaGen();
  }

  cargarPokemonSeptimaGen(): void{
    this.pokemonService.getPokemonsSeptimaGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }
}