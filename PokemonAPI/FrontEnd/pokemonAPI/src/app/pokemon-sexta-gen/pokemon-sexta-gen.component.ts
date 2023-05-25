import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-sexta-gen',
  templateUrl: './pokemon-sexta-gen.component.html'
})
export class PokemonSextaGenComponent implements OnInit{

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
   this.cargarPokemonSextaGen();
  }

  cargarPokemonSextaGen(): void{
    this.pokemonService.getPokemonsSextaGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }
}