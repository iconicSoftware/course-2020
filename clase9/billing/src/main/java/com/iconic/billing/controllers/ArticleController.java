package com.iconic.billing.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iconic.billing.entities.Article;
import com.iconic.billing.services.IArticleService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ArticleController {
	
	@Autowired
	private IArticleService articleService;
	
	@GetMapping("/articles")
	public List<Article> index() {
		return articleService.findAll();
	}
	
	@GetMapping("/articles/{id}")
	public ResponseEntity<?> findArticle(@PathVariable Long id) {
		
		Map<String, Object> response = new HashMap<String, Object>();
		Article article = null;
		
		article = articleService.findArticleById(id);
		
		if(article == null) {
			response.put("messsage", "Article not found");
			response.put("severity", "LOW");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		
		response.put("article", article);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
		
	}
	
	@PostMapping("/articles")
	public Article save(@RequestBody Article article) {
		
		Article articleNew = null;
		
		article.setName(article.getName().toUpperCase());
		
		articleNew = articleService.save(article);
		
		return articleNew;
	}
	
	@PutMapping("/articles/{id}")
	public ResponseEntity<?> update(@RequestBody Article article, @PathVariable Long id) {
		
		Article articleUpdated = null;
		Map<String, Object> response = new HashMap<String, Object>();
		articleUpdated = articleService.findArticleById(id);
		
		if(articleUpdated == null) {
			response.put("messsage", "Article not found. Not updated");
			response.put("severity", "LOW");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		
		articleUpdated.setName(article.getName().toUpperCase());
		articleUpdated.setCosto(article.getCosto());
		
		try {
			articleUpdated = articleService.save(articleUpdated);
		} catch (Exception e) {
			response.put("messsage", "internal server error");
			response.put("severity", "HIGHT");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
			
		
		response.put("messsage", "Article updated");
		response.put("article", articleUpdated);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
	}
	
	

}
