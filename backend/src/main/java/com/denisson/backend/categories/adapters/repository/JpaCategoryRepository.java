package com.denisson.backend.categories.adapters.repository;

import com.denisson.backend.categories.entities.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class JpaCategoryRepository implements CategoriesRepository {
    private final SpringDataCategoryRepository repository;

    @Autowired
    public JpaCategoryRepository(SpringDataCategoryRepository repository) {
        this.repository = repository;
    }

    @Override
    public boolean existsByName(String name) {
        return repository.existsByName(name);
    }

    @Override
    public Category save(Category category) {
        return repository.save(category);
    }

}
