package com.qa.spring.controller;

import java.util.List;


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

import com.qa.spring.model.Product;
import com.qa.spring.service.ProductService;


@RestController //handles HTTP requests
@CrossOrigin
@RequestMapping("/Product")
public class ProductController {
	
private ProductService service;
	
	@Autowired
	public ProductController(ProductService service) {
		super();
		this.service = service;
	}
	
	@PostMapping("/create")
	public ResponseEntity<Product> createProduct(@RequestBody Product productData) {
		 return new ResponseEntity<>(this.service.createProduct(productData), HttpStatus.CREATED);
	}
	
	@GetMapping("/readAll") //Get all items
	public ResponseEntity<List<Product>> getAllProducts() {
		return new ResponseEntity<>(this.service.getAllProducts(), HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable long id) {
	    return new ResponseEntity<>(this.service.deleteProduct(id), HttpStatus.NO_CONTENT);
	}
	
	@PutMapping("/update/{id}")
    public Product updateProduct(@PathVariable long id, @RequestBody Product product) {
        return this.service.updateItem(id, product);
    }

}

