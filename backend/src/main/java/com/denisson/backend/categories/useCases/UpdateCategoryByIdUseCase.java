package com.denisson.backend.categories.useCases;

import com.denisson.backend.abstracter.useCases.UpdateAbstracterByIdUseCase;
import com.denisson.backend.categories.adapters.DTO.CategoryDTO;
import com.denisson.backend.categories.adapters.repository.CategoriesRepository;
import com.denisson.backend.categories.entities.Category;
import com.denisson.backend.abstracter.entities.GeneralException;

import java.util.Optional;

public class UpdateCategoryByIdUseCase extends UpdateAbstracterByIdUseCase<Category, CategoryDTO, CategoriesRepository> {

    public UpdateCategoryByIdUseCase(CategoriesRepository categoriesRepository) {
        super(categoriesRepository);
    }

    @Override
    protected void updateFields(Category category, CategoryDTO categoryDTO) {
        category.setName(categoryDTO.name());
        category.setImage(categoryDTO.image());
    }
}
