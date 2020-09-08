package com.iconic.billing.request;

import java.io.Serializable;

public class ClienteRequest implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String nombre;
	private String dni;
	private String email;
	private String foto;
	private int punto;
	
	public ClienteRequest(String nombre, String dni, String email, String foto, int punto) {
		super();
		this.nombre = nombre;
		this.dni = dni;
		this.email = email;
		this.foto = foto;
		this.punto = punto;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDni() {
		return dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public int getPunto() {
		return punto;
	}

	public void setPunto(int punto) {
		this.punto = punto;
	}
	
	
	
	

}
