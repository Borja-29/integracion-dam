import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonService } from './pokemon.service';
import { tap } from 'rxjs';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
   this.cargarPokemon();
  }

  cargarPokemon(): void{
    this.pokemonService.getPokemons().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }

  cargarPokemonSegundaGen(): void{
    this.pokemonService.getPokemonsSegundaGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }

  cargarPokemonTerceraGen(): void{
    this.pokemonService.getPokemonsTerceraGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }

  cargarPokemonCuartaGen(): void{
    this.pokemonService.getPokemonsCuartaGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }

  cargarPokemonQuintaGen(): void{
    this.pokemonService.getPokemonsQuintaGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }

  cargarPokemonSextaGen(): void{
    this.pokemonService.getPokemonsSextaGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }

  cargarPokemonSeptimaGen(): void{
    this.pokemonService.getPokemonsSeptimaGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }

  cargarPokemonOctavaGen(): void{
    this.pokemonService.getPokemonsOctavaGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }

  cargarPokemonNovenaGen(): void{
    this.pokemonService.getPokemonsNovenaGen().pipe(
      tap(pokemons => this.pokemons = pokemons)
    ).subscribe();
  }

}
