package com.iconic.billing.repositories;

import org.springframework.data.repository.CrudRepository;

import com.iconic.billing.entities.Client;

public interface IClientDao extends CrudRepository<Client, Long> {

}
