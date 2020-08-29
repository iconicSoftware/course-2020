package com.iconic.billing.entities;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "empleados")
public class Empleyee implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@EmbeddedId
	private EmployeeId id;
	
	private double sueldo;

	public Empleyee() {
		super();
	}

	public EmployeeId getId() {
		return id;
	}

	public void setId(EmployeeId id) {
		this.id = id;
	}

	public double getSueldo() {
		return sueldo;
	}

	public void setSueldo(double sueldo) {
		this.sueldo = sueldo;
	}
	
	
	
}
