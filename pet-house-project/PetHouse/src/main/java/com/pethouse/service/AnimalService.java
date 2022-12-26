package com.pethouse.service;

import java.util.List;

import com.pethouse.model.Animal;

public interface AnimalService {

	public List<Animal> getAll();
	public Animal find(Integer id);
	public Animal save(Animal animal);
	public Animal update(Animal animal);
	public void delete(Integer id);
}
