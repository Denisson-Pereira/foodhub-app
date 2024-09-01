package com.denisson.backend.categories.useCases;

import com.denisson.backend.categories.adapters.repository.CategoriesRepository;
import com.denisson.backend.categories.entities.GeneralException;

public class DeleteCategoryByIdUseCase {
    private final CategoriesRepository categoriesRepository;

    public DeleteCategoryByIdUseCase(CategoriesRepository categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    public String execute(Long id) {
        if (categoriesRepository.existsById(id)) {
            categoriesRepository.deleteById(id);
            return String.format("Id %s deleted", id);
        }

        throw new GeneralException(String.format("Id %s not found!", id));
    }
}
