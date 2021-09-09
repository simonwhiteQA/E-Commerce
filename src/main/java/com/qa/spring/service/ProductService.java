package com.qa.spring.service;


	import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.spring.model.Product;
import com.qa.spring.repository.ProductRepository;


	@Service // handles business logic
	public class ProductService {

		private ProductRepository repo;

		@Autowired
		public ProductService(ProductRepository repo) {
			this.repo = repo;
		}

		public Product createProduct(Product product) {
			return this.repo.save(product);
		}

		public List<Product> getAllProducts() {
			return this.repo.findAll();
		}

		public String deleteProduct(long id) {
			if(this.repo.existsById(id)) {
				this.repo.deleteById(id);
		    	return "This product was deleted: " + id;
		    } else {
		    	return "This product wasn't deleted: " + id;
		    }
		}
		
		public Product updateItem(long id, Product product) {
			if(this.repo.existsById(id)) {
				return this.repo.save(product);
		    } else {
		    	return null;
		    }
	    }
		
		
	}

