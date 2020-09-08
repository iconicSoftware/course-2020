package com.iconic.billing.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.iconic.billing.entities.Brand;

@Repository
public interface IBrandDao extends CrudRepository<Brand, Long> {
	
	@Query("SELECT b FROM Brand b WHERE b.activo = true")
	public List<Brand> findAllActivo();
	
	@Query("SELECT b FROM Brand b WHERE b.activo = true")
	public Page<Brand> findAllActivoPage(Pageable page);


}
