package com.iconic.billing.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iconic.billing.entities.Article;

@Repository
public interface IArticleDao extends JpaRepository<Article, Long>{
	

}
