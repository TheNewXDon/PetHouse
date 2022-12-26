package com.pethouse.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Animal implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false, updatable = false)
	private int id;
	
	private String name;
	private int age;
	private String kind;
	private String phone;
	private String owner;
	private String imageUrl;
	@Column(nullable = false, updatable = false)
	private String animalCode;
	
	public Animal() {
		
	}
	
	public Animal(int id, String name, int age, String kind, String phone, String owner, String imageUrl,
			String animalCode) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.kind = kind;
		this.phone = phone;
		this.owner = owner;
		this.imageUrl = imageUrl;
		this.animalCode = animalCode;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getKind() {
		return kind;
	}
	public void setKind(String kind) {
		this.kind = kind;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getAnimalCode() {
		return animalCode;
	}
	public void setAnimalCode(String animalCode) {
		this.animalCode = animalCode;
	}
	@Override
	public String toString() {
		return "Animal [id=" + id + ", name=" + name + ", age=" + age + ", kind=" + kind + ", phone=" + phone
				+ ", owner=" + owner + ", imageUrl=" + imageUrl + ", animalCode=" + animalCode + "]";
	}
	
	
	
	
}
