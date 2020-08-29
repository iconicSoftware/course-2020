package com.iconic.billing.controllers;

import java.util.Date;
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

import com.iconic.billing.entities.Brand;
import com.iconic.billing.services.IBrandService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class BrandController {

	@Autowired
	private IBrandService brandService;
	
	@PostMapping("/marcas")
	public Brand save(@RequestBody Brand brand) {
		brand.setActivo(true);
		return brandService.save(brand);
	}
	
	@GetMapping("/marcas")
	public List<Brand> findAll(){
		return brandService.findAllActivo();
	}
	
	@PutMapping("/marcas/{id}")
	public ResponseEntity<?> update(@RequestBody Brand brand, @PathVariable long id){
		
		Brand brandUpdated = brandService.findBrandById(id);
		Map<String, Object> response = new HashMap<String, Object>();
		
		if(brandUpdated == null) {
			response.put("messsage", "Brand not found");
			response.put("severity", "LOW");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.NOT_FOUND);
		}
		
		try {
			
			brandUpdated.setNombre(brand.getNombre().toUpperCase());
			brandUpdated.setFechaModificacion(new Date());
			
			brandUpdated = brandService.save(brandUpdated);
			
		} catch (Exception e) {
			response.put("messsage", "internal server error");
			response.put("severity", "HIGHT");
			return new ResponseEntity<Map<String, Object>>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		response.put("messsage", "the brand was updated");
		response.put("brand", brandUpdated);
		return new ResponseEntity<Map<String, Object>>(response, HttpStatus.OK);
		
	}
	
}
