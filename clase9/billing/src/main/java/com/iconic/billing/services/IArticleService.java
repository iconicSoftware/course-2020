package com.iconic.billing.services;

import java.util.List;

import com.iconic.billing.entities.Article;

public interface IArticleService {
	public Article save(Article article);
	public List<Article> findAll();
	public Article findArticleById(Long id);
	public void deleteArticleById(Long id);
}
