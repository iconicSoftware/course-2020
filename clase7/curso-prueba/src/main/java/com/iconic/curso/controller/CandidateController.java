package com.iconic.curso.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iconic.curso.entity.Candidate;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class CandidateController {

	@GetMapping("/candidate")
	public Candidate index() {
		Candidate candidate = new Candidate(1, "Agustin", "Decima");	
		return candidate;
	}
	
	
}
