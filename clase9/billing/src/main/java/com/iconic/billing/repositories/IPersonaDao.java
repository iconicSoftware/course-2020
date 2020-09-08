package com.iconic.billing.repositories;

import org.springframework.data.repository.CrudRepository;

import com.iconic.billing.entities.People;

public interface IPersonaDao extends CrudRepository<People, Long>{

}
