package com.denisson.backend.categories.adapters.repository;

import com.denisson.backend.categories.entities.Category;

import java.util.List;
import java.util.Optional;

public interface CategoriesRepository {

    Category save(Category categories);
    List<Category> findAll();
    boolean existsByName(String name);

}
