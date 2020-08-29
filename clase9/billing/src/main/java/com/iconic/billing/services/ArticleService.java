package com.iconic.billing.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iconic.billing.entities.Article;
import com.iconic.billing.repositories.IArticleDao;

@Service
public class ArticleService implements IArticleService {
	
	@Autowired
	private IArticleDao articleDao;

	@Override
	public Article save(Article article) {
		return articleDao.save(article);
	}

	@Override
	public List<Article> findAll() {
		return articleDao.findAll();
	}

	@Override
	public Article findArticleById(Long id) {
		return articleDao.findById(id).orElse(null);
	}

	@Override
	public void deleteArticleById(Long id) {
		articleDao.deleteById(id);
	}

}
