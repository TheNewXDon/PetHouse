package com.pethouse.repo;

import java.util.Optional;

import com.pethouse.model.Animal;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimalRepo extends JpaRepository<Animal, Integer>{

	public Optional<Animal> findAnimalByName(String name);
	public Optional<Animal> findAnimalById(Integer id);
	public void deleteAnimalById(Integer id);
}
