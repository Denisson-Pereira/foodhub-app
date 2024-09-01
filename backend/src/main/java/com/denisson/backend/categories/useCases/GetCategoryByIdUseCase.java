package com.denisson.backend.categories.useCases;

import com.denisson.backend.categories.adapters.repository.CategoriesRepository;
import com.denisson.backend.categories.entities.Category;
import com.denisson.backend.categories.entities.GeneralException;

import java.util.Optional;

public class GetCategoryByIdUseCase {
    private final CategoriesRepository categoriesRepository;

    public GetCategoryByIdUseCase(CategoriesRepository categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    public Optional<Category> execute(Long id) {
        if (categoriesRepository.existsById(id)) {
            return categoriesRepository.findById(id);
        }
        throw new GeneralException(String.format("Id %s not found!", id));
    }
}
