package com.denisson.backend.establishment.adapters.repository;

import com.denisson.backend.establishment.entities.Establishment;

import java.util.List;
import java.util.Optional;

public interface EstablishmentRepository {

    Establishment save(Establishment establishment);
    List<Establishment> findAll();
    boolean existsByName(String name);
    boolean existsById(Long id);
    Optional<Establishment> findById(Long id);
    Optional<Establishment> findByName(String name);
    void delete(Long id);
}
