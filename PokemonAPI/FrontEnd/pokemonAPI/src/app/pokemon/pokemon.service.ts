import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, map, catchError, throwError, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

private urlEndPoint:string = 'http://localhost:8080';

private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get(`${this.urlEndPoint}/pokemon`).pipe(
      map(response => {
        let pokemons = response as Pokemon[];

        return pokemons.map(pokemon => {
          pokemon.name = pokemon.name.toUpperCase();
          return pokemon;
        });
      }),
    )
  }

  getPokemonsPrimeraGen(): Observable<Pokemon[]> {
    return this.http.get(`${this.urlEndPoint}/pokemon/primeraGeneracion`).pipe(
      map(response => {
        let pokemons = response as Pokemon[];
        return pokemons.map(pokemon => {
          pokemon.name = pokemon.name.toUpperCase();
          return pokemon;
        });
      })
    )
  }

  getPokemonsSegundaGen(): Observable<Pokemon[]> {
    return this.http.get(`${this.urlEndPoint}/pokemon/segundaGeneracion`).pipe(
      map(response => {
        let pokemons = response as Pokemon[];
        return pokemons.map(pokemon => {
          pokemon.name = pokemon.name.toUpperCase();
          return pokemon;
        });
      })
    )
  }
  getPokemonsTerceraGen(): Observable<Pokemon[]> {
    return this.http.get(`${this.urlEndPoint}/pokemon/terceraGeneracion`).pipe(
      map(response => {
        let pokemons = response as Pokemon[];
        return pokemons.map(pokemon => {
          pokemon.name = pokemon.name.toUpperCase();
          return pokemon;
        });
      })
    )
  }

  getPokemonsCuartaGen(): Observable<Pokemon[]> {
    return this.http.get(`${this.urlEndPoint}/pokemon/cuartaGeneracion`).pipe(
      map(response => {
        let pokemons = response as Pokemon[];
        return pokemons.map(pokemon => {
          pokemon.name = pokemon.name.toUpperCase();
          return pokemon;
        });
      })
    )
  }

  getPokemonsQuintaGen(): Observable<Pokemon[]> {
    return this.http.get(`${this.urlEndPoint}/pokemon/quintaGeneracion`).pipe(
      map(response => {
        let pokemons = response as Pokemon[];
        return pokemons.map(pokemon => {
          pokemon.name = pokemon.name.toUpperCase();
          return pokemon;
        });
      })
    )
  }

  getPokemonsSextaGen(): Observable<Pokemon[]> {
    return this.http.get(`${this.urlEndPoint}/pokemon/sextaGeneracion`).pipe(
      map(response => {
        let pokemons = response as Pokemon[];
        return pokemons.map(pokemon => {
          pokemon.name = pokemon.name.toUpperCase();
          return pokemon;
        });
      })
    )
  }

  getPokemonsSeptimaGen(): Observable<Pokemon[]> {
    return this.http.get(`${this.urlEndPoint}/pokemon/septimaGeneracion`).pipe(
      map(response => {
        let pokemons = response as Pokemon[];
        return pokemons.map(pokemon => {
          pokemon.name = pokemon.name.toUpperCase();
          return pokemon;
        });
      })
    )
  }

  getPokemonsOctavaGen(): Observable<Pokemon[]> {
    return this.http.get(`${this.urlEndPoint}/pokemon/octavaGeneracion`).pipe(
      map(response => {
        let pokemons = response as Pokemon[];
        return pokemons.map(pokemon => {
          pokemon.name = pokemon.name.toUpperCase();
          return pokemon;
        });
      })
    )
  }

  getPokemonsNovenaGen(): Observable<Pokemon[]> {
    return this.http.get(`${this.urlEndPoint}/pokemon/novenaGeneracion`).pipe(
      map(response => {
        let pokemons = response as Pokemon[];
        return pokemons.map(pokemon => {
          pokemon.name = pokemon.name.toUpperCase();
          return pokemon;
        });
      })
    )
  }

}

