package com.iconic.billing.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.iconic.billing.entities.Brand;
import com.iconic.billing.repositories.IBrandDao;

@Service
public class BrandService implements IBrandService {
	
	@Autowired
	private IBrandDao brandDao;

	@Override
	public Brand save(Brand brand) {
		return brandDao.save(brand);
	}

	@Override
	@Transactional(readOnly = true)
	public List<Brand> findAll() {
		// TODO Auto-generated method stub
		return (List<Brand>) brandDao.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Brand findBrandById(Long id) {
		return brandDao.findById(id).orElse(null);
	}

	@Override
	@Transactional(readOnly = true)
	public void deleteById(Long id) {
		// TODO Auto-generated method stub
		brandDao.deleteById(id);
		
	}

	@Override
	public List<Brand> findAllActivo() {
		return brandDao.findAllActivo();
	}

}
