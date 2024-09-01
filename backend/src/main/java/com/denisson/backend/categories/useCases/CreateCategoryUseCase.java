package com.denisson.backend.categories.useCases;

import com.denisson.backend.categories.adapters.repository.CategoriesRepository;
import com.denisson.backend.categories.entities.Category;
import com.denisson.backend.categories.entities.GeneralException;

public class CreateCategoryUseCase {
    private final CategoriesRepository categoriesRepository;

    public  CreateCategoryUseCase(CategoriesRepository categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    public Category execute(Category category) {
        if (categoriesRepository.existsByName(category.getName())) {
            throw new GeneralException("The category name already exists!");
        }
        return categoriesRepository.save(category);
    }

}
