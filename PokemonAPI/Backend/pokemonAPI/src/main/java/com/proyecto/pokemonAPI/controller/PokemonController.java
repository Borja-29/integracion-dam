package com.proyecto.pokemonAPI.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.pokemonAPI.model.MyPokemon;
import com.proyecto.pokemonAPI.service.PokemonService;

@RestController
public class PokemonController {
	
	@Autowired
	PokemonService pokemonService;
	
	@GetMapping("pokemon")
	public ResponseEntity<List<MyPokemon>> findAllPokemon(){
		List<MyPokemon> lista = pokemonService.findAll();
		
		return new ResponseEntity<>(lista, HttpStatus.OK);
	}
	
	@GetMapping("pokemon/primeraGeneracion")
	public ResponseEntity<List<MyPokemon>> findFirstGenerationPokemon(){
		return new ResponseEntity<>(pokemonService.findPrimeraGeneracion(), HttpStatus.OK);
	}
	
	@GetMapping("pokemon/segundaGeneracion")
	public ResponseEntity<List<MyPokemon>> findSecondGenerationPokemon(){
		return new ResponseEntity<>(pokemonService.findSegundaGeneracion(), HttpStatus.OK);
	}
	
	@GetMapping("pokemon/terceraGeneracion")
	public ResponseEntity<List<MyPokemon>> findThirdGenerationPokemon(){
		return new ResponseEntity<>(pokemonService.findTerceraGeneracion(), HttpStatus.OK);
	}
	
	@GetMapping("pokemon/cuartaGeneracion")
	public ResponseEntity<List<MyPokemon>> findFourthGenerationPokemon(){
		return new ResponseEntity<>(pokemonService.findCuartaGeneracion(), HttpStatus.OK);
	}
	
	@GetMapping("pokemon/quintaGeneracion")
	public ResponseEntity<List<MyPokemon>> findFifthGenerationPokemon(){
		return new ResponseEntity<>(pokemonService.findQuintaGeneracion(), HttpStatus.OK);
	}
	
	@GetMapping("pokemon/sextaGeneracion")
	public ResponseEntity<List<MyPokemon>> findSixthGenerationPokemon(){
		return new ResponseEntity<>(pokemonService.findSextaGeneracion(), HttpStatus.OK);
	}
	
	@GetMapping("pokemon/septimaGeneracion")
	public ResponseEntity<List<MyPokemon>> findSeventhGenerationPokemon(){
		return new ResponseEntity<>(pokemonService.findSeptimaGeneracion(), HttpStatus.OK);
	}
	
	@GetMapping("pokemon/octavaGeneracion")
	public ResponseEntity<List<MyPokemon>> findEighthGenerationPokemon(){
		return new ResponseEntity<>(pokemonService.findOctavaGeneracion(), HttpStatus.OK);
	}
	
	@GetMapping("pokemon/novenaGeneracion")
	public ResponseEntity<List<MyPokemon>> findNinthGenerationPokemon(){
		return new ResponseEntity<>(pokemonService.findNovenaGeneracion(), HttpStatus.OK);
	}
	
}
