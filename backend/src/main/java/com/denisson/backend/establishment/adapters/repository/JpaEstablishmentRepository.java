package com.denisson.backend.establishment.adapters.repository;

import com.denisson.backend.establishment.entities.Establishment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class JpaEstablishmentRepository implements EstablishmentRepository{
    private final SpringDataEstablishmentRepository repository;

    @Autowired
    public JpaEstablishmentRepository(SpringDataEstablishmentRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Establishment> findAll() {
        return repository.findAll();
    }
}
