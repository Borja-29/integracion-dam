package com.proyecto.pokemonAPI.model;

import java.util.ArrayList;
import java.util.List;

import com.github.oscar0812.pokeapi.models.pokemon.PokemonType;

public class MyPokemon {
	
	private String name;
	
	private ArrayList<String> abilities;
	
	private ArrayList<Integer> stats;
	
	private String sprite;
	
	private ArrayList<String> types;
	PokemonType tipo ;
	
	public MyPokemon() {
	}

	public MyPokemon(String name, ArrayList<String> abilities, ArrayList<Integer> stats,
			String sprite, ArrayList<String> types) {
		this.name = name;
		this.abilities = abilities;
		this.stats = stats;
		this.sprite = sprite;
		this.types = types;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getAbilities() {
		return abilities;
	}

	public void setAbilities(ArrayList<String> abilities) {
		this.abilities = abilities;
	}

	public ArrayList<Integer> getStats() {
		return stats;
	}

	public void setStats(ArrayList<Integer> stats) {
		this.stats = stats;
	}

	public String getSprite() {
		return sprite;
	}

	public void setSprite(String sprite) {
		this.sprite = sprite;
	}

	public ArrayList<String> getTypes() {
		return types;
	}

	public void setTypes(ArrayList<String> types) {
		this.types = types;
	}
	
	public void addAbility(String ability) {
		this.abilities.add(ability);
	}
	public void addStat(Integer stat) {
		this.stats.add(stat);
	}
	public void addType(String type) {
		this.types.add(type);
	}
	
}
