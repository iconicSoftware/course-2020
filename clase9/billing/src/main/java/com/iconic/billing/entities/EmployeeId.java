package com.iconic.billing.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Embeddable
public class EmployeeId implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@OneToOne
	@JoinColumn(name = "people_id")
	private People people;
	

	public EmployeeId() {
		super();
	}

	public People getPeople() {
		return people;
	}

	public void setPeople(People people) {
		this.people = people;
	}
	
	

}
