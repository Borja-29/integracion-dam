package com.proyecto.pokemonAPI.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.github.oscar0812.pokeapi.models.pokemon.Pokemon;
import com.github.oscar0812.pokeapi.models.pokemon.PokemonAbility;
import com.github.oscar0812.pokeapi.models.pokemon.PokemonStat;
import com.github.oscar0812.pokeapi.models.pokemon.PokemonType;
import com.github.oscar0812.pokeapi.models.resources.NamedAPIResourceList;
import com.github.oscar0812.pokeapi.models.utility.NamedAPIResource;
import com.github.oscar0812.pokeapi.utils.Client;
import com.proyecto.pokemonAPI.model.MyPokemon;

@Service
public class PokemonServiceImpl implements PokemonService {

	@Override
	public List<MyPokemon> findAll() {
		//1010
		return getPokemonListByLength(1010, 0);
	}

	@Override
	public List<MyPokemon> findPrimeraGeneracion() {
		
		return getPokemonListByLength(151, 0);
	}

	@Override
	public List<MyPokemon> findSegundaGeneracion() {

		return getPokemonListByLength(100, 151);
	}

	@Override
	public List<MyPokemon> findTerceraGeneracion() {

		return getPokemonListByLength(135, 251);
	}

	@Override
	public List<MyPokemon> findCuartaGeneracion() {

		return getPokemonListByLength(108, 386);
	}

	@Override
	public List<MyPokemon> findQuintaGeneracion() {

		return getPokemonListByLength(155, 494);
	}

	@Override
	public List<MyPokemon> findSextaGeneracion() {

		return getPokemonListByLength(72, 649);
	}

	@Override
	public List<MyPokemon> findSeptimaGeneracion() {

		return getPokemonListByLength(88, 721);
	}

	@Override
	public List<MyPokemon> findOctavaGeneracion() {

		return getPokemonListByLength(96, 809);
	}

	@Override
	public List<MyPokemon> findNovenaGeneracion() {

		return getPokemonListByLength(105, 905);
	}
	
	public List<MyPokemon> getPokemonListByLength(int length, int offset) {
		Client.CACHE = false;
		NamedAPIResourceList list = Client.getPokemonList(length, offset);
		List<MyPokemon> pokemonList = new ArrayList<MyPokemon>();
		for (NamedAPIResource nar:list.getResults()) {
			ArrayList<String> abilities = new ArrayList<String>();
			ArrayList<Integer> stats= new ArrayList<Integer>();
			ArrayList<String> types= new ArrayList<String>();
			Pokemon pokemon = Pokemon.getByName(nar.getName());
			MyPokemon myPokemon = new MyPokemon();
			myPokemon.setName(pokemon.getName());
			myPokemon.setSprite(pokemon.getSprites().getFrontDefault());
			for(PokemonAbility ability : pokemon.getAbilities()) {
				abilities.add(ability.getAbility().getName());
			}
			myPokemon.setAbilities(abilities);
			for(PokemonType type : pokemon.getTypes()) {
				types.add(type.getType().getName());
			}
			myPokemon.setTypes(types);
			for(PokemonStat stat : pokemon.getStats()) {
				stats.add(stat.getBaseStat());
			}
			myPokemon.setStats(stats);
			pokemonList.add(myPokemon);

		}
		return pokemonList;
	}

}
