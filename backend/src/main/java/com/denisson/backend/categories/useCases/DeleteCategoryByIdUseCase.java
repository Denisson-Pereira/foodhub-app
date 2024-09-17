package com.denisson.backend.categories.useCases;

import com.denisson.backend.abstracter.useCases.DeleteAbstracterByIdUseCase;
import com.denisson.backend.categories.adapters.repository.CategoriesRepository;
import com.denisson.backend.abstracter.useCases.GeneralException;
import com.denisson.backend.categories.entities.Category;

public class DeleteCategoryByIdUseCase extends DeleteAbstracterByIdUseCase<Category, CategoriesRepository> {

    public DeleteCategoryByIdUseCase(CategoriesRepository categoriesRepository) {
        super(categoriesRepository);
    }
}
