package com.denisson.backend.categories.adapters.repository;

import com.denisson.backend.categories.entities.Category;
import com.denisson.backend.abstracter.adapters.repository.RepositoryAbstracter;

import java.util.List;
import java.util.Optional;

public interface CategoriesRepository extends RepositoryAbstracter<Category> {

    Category save(Category categories);
    List<Category> findAll();
    boolean existsByName(String name);
    boolean existsById(Long id);
    Optional<Category> findById(Long id);
    Optional<Category> findByName(String name);
    void deleteById(Long id);

}
