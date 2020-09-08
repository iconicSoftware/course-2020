package com.iconic.billing.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iconic.billing.entities.Client;
import com.iconic.billing.entities.ClientId;
import com.iconic.billing.entities.People;
import com.iconic.billing.repositories.IClientDao;
import com.iconic.billing.repositories.IPersonaDao;
import com.iconic.billing.request.ClienteRequest;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ClientController {
	
	@Autowired
	private IPersonaDao personaService;
	
	@Autowired
	private IClientDao clienteService;
	
	@PostMapping("/cliente")
	public ClienteRequest save(@RequestBody ClienteRequest cliente) {
		
		People persona = new People();
		persona.setNombre(cliente.getNombre());
		persona.setMail(cliente.getDni());
		
		persona = personaService.save(persona);
		
		Client client = new Client();
		client.setId(new ClientId(persona));
		client.setPuntos(100);
		client.setFoto("aasdasd/asda");
		
		client = clienteService.save(client);
		
		return cliente;
	
	}

}
