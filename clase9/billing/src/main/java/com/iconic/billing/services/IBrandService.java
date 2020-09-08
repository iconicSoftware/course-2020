package com.iconic.billing.services;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.iconic.billing.entities.Brand;

public interface IBrandService {
	public Brand save(Brand brand);
	public List<Brand> findAll();
	public List<Brand> findAllActivo();
	public Page<Brand> findAllActivoPage(Pageable page);
 	public Brand findBrandById(Long id);
	public void deleteById(Long id);
}
