package com.proyecto.pokemonAPI.service;

import java.util.List;

import com.proyecto.pokemonAPI.model.MyPokemon;

public interface PokemonService {
	
	public List<MyPokemon> findAll();
	
	public List<MyPokemon> findPrimeraGeneracion();
	
	public List<MyPokemon> findSegundaGeneracion();
	
	public List<MyPokemon> findTerceraGeneracion();

	public List<MyPokemon> findCuartaGeneracion();

	public List<MyPokemon> findQuintaGeneracion();
	
	public List<MyPokemon> findSextaGeneracion();
	
	public List<MyPokemon> findSeptimaGeneracion();
	
	public List<MyPokemon> findOctavaGeneracion();
	
	public List<MyPokemon> findNovenaGeneracion();
	
}
