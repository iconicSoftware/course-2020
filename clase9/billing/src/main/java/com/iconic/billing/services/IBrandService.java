package com.iconic.billing.services;

import java.util.List;

import com.iconic.billing.entities.Brand;

public interface IBrandService {
	public Brand save(Brand brand);
	public List<Brand> findAll();
	public List<Brand> findAllActivo();
 	public Brand findBrandById(Long id);
	public void deleteById(Long id);
}
