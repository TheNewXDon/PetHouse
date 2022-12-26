package com.pethouse.ctr;

import java.util.List;

import com.pethouse.model.Animal;
import com.pethouse.service.AnimalService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/animal")
@CrossOrigin
public class AnimalCtr {

	@Autowired
	private final AnimalService animalService;
	
	public AnimalCtr(AnimalService animalService) {
		this.animalService = animalService;
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Animal>> getAllAnimals() {
		List<Animal> animals = animalService.getAll();
		return new ResponseEntity<>(animals, HttpStatus.OK);
	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity<Animal> getAnimalById(@PathVariable("id") Integer id) {
		Animal animal = animalService.find(id);
		return new ResponseEntity<>(animal, HttpStatus.OK);
	}
	
	@PostMapping("/save")
	public ResponseEntity<Animal> saveAnimal(@RequestBody Animal animal) {
		Animal newAnimal = animalService.save(animal);
		return new ResponseEntity<>(newAnimal, HttpStatus.CREATED);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Animal> updateAnimal(@RequestBody Animal animal) {
		Animal updateAnimal = animalService.save(animal);
		return new ResponseEntity<>(updateAnimal, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteAnimal(@PathVariable("id") Integer id) {
		animalService.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
