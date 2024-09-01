package com.denisson.backend.categories.useCases;

import com.denisson.backend.categories.adapters.repository.CategoriesRepository;
import com.denisson.backend.categories.entities.Category;

import java.util.List;

public class GetAllCategoriesUseCase {
    private final CategoriesRepository categoriesRepository;

    public GetAllCategoriesUseCase(CategoriesRepository categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    public List<Category> execute() {
        return categoriesRepository.findAll();
    }
}
