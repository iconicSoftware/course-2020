package com.iconic.billing.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.iconic.billing.entities.Article;

public interface IArticleService {
	public Article save(Article article);
	public List<Article> findAll();
	public Page<Article> findAllPage(Pageable page);
	public Article findArticleById(Long id);
	public void deleteArticleById(Long id);
}
