package com.qa.spring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product {

	@Id //Uniquely identifies field (PK)
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Auto Increments ID
	private Long id;
	
	@Column
	private String name;
	
	@Column
	private String description;
	
	@Column
	private double price;
	
	@Column
	private int rating;
	
	@Column
	private String photo;
	
	@Column
	private String category;
	
	public Product() {
		super();
	}

	public Product(Long id, String name, String description, double price, int rating, String photo, String category) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.rating = rating;
		this.photo = photo;
		this.category = category;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	
}

