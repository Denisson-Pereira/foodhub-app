package com.denisson.backend.abstracter.adapters.repository;

import com.denisson.backend.categories.entities.Category;

import java.util.List;
import java.util.Optional;

public interface RepositoryAbstracter<T> {

    T save(T t);
    List<T> findAll();
    boolean existsByName(String name);
    boolean existsById(Long id);
    Optional<T> findById(Long id);
    Optional<T> findByName(String name);
    void deleteById(Long id);

}
