package com.denisson.backend.establishment.adapters.repository;

import com.denisson.backend.establishment.entities.Establishment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class JpaEstablishmentRepository implements EstablishmentRepository{
    private final SpringDataEstablishmentRepository repository;

    @Autowired
    public JpaEstablishmentRepository(SpringDataEstablishmentRepository repository) {
        this.repository = repository;
    }

    @Override
    public boolean existsByName(String name) {
        return repository.existsByName(name);
    }

    @Override
    public Establishment save(Establishment establishment) {
        return repository.save(establishment);
    }

    @Override
    public List<Establishment> findAll() {
        return repository.findAll();
    }

    @Override
    public boolean existsById(Long id) {
        return repository.existsById(id);
    }

    @Override
    public Optional<Establishment> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Optional<Establishment> findByName(String name) {
        return repository.findByName(name);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
