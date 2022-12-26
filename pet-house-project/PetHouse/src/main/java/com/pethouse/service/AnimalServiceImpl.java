package com.pethouse.service;

import java.util.List;
import java.util.UUID;

import com.pethouse.exception.UserNotFoundException;
import com.pethouse.model.Animal;
import com.pethouse.repo.AnimalRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AnimalServiceImpl implements AnimalService {

	private final AnimalRepo animalRepo;
	
	@Autowired
	public AnimalServiceImpl(AnimalRepo animalRepo) {
		this.animalRepo = animalRepo;
	}
	
	@Override
	public List<Animal> getAll() {
		return animalRepo.findAll();
	}

	@Override
	public Animal find(Integer id) {
		return animalRepo.findAnimalById(id)
				.orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
	}

	@Override
	public Animal save(Animal animal) {
		animal.setAnimalCode(UUID.randomUUID().toString());
		return animalRepo.save(animal);
		
	}

	@Override
	public Animal update(Animal animal) {
		return animalRepo.save(animal);
		
	}

	@Override
	public void delete(Integer id) {
		animalRepo.deleteAnimalById(id);
		
	}

}
