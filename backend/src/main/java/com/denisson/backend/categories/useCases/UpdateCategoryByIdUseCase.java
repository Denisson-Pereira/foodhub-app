package com.denisson.backend.categories.useCases;

import com.denisson.backend.categories.adapters.DTO.CategoryDTO;
import com.denisson.backend.categories.adapters.repository.CategoriesRepository;
import com.denisson.backend.categories.entities.Category;
import com.denisson.backend.categories.entities.GeneralException;

import java.util.Optional;

public class UpdateCategoryByIdUseCase {
    private final CategoriesRepository categoriesRepository;

    public UpdateCategoryByIdUseCase(CategoriesRepository categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    public Category execute(Long id, CategoryDTO categoryDTO) {
        Optional<Category> optionalCategory = categoriesRepository.findById(id);
        Category category = optionalCategory
                .orElseThrow(() -> new GeneralException("Category not found for id = " + id));
        Optional<Category> categoryWithName = categoriesRepository.findByName(categoryDTO.name());

        if (categoryWithName.isPresent() && !categoryWithName.get().getId().equals(id)) {
            throw new GeneralException(String.format("Name %s already exists!", categoryDTO.name()));
        }

        category.setName(categoryDTO.name());
        category.setImage(categoryDTO.image());

        return categoriesRepository.save(category);

    }
}
