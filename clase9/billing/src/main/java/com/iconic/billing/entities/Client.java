package com.iconic.billing.entities;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "clientes")
public class Client implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private ClientId id;
	
	private int puntos;
	
	private String foto;

	public Client() {
		super();
	}

	public ClientId getId() {
		return id;
	}

	public void setId(ClientId id) {
		this.id = id;
	}

	public int getPuntos() {
		return puntos;
	}

	public void setPuntos(int puntos) {
		this.puntos = puntos;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}
	
	

}
