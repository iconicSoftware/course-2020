package com.iconic.billing.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Embeddable
public class ClientId implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@OneToOne
	@JoinColumn(name = "people_id")
	private People people;

	public ClientId() {
		super();
	}

	public People getPeople() {
		return people;
	}

	public void setPeople(People people) {
		this.people = people;
	}
	
	
	
}
