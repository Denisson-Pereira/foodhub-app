package com.denisson.backend.categories.useCases;

import com.denisson.backend.categories.adapters.repository.CategoriesRepository;
import com.denisson.backend.categories.entities.Category;

import java.util.List;

public class ReadAllCategoriesUseCase {
    private final CategoriesRepository categoriesRepository;

    public ReadAllCategoriesUseCase(CategoriesRepository categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    public List<Category> execute() {
        return categoriesRepository.findAll();
    }
}
