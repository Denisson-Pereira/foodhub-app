package com.denisson.backend.categories.useCases;

import com.denisson.backend.categories.adapters.repository.CategoriesRepository;
import com.denisson.backend.categories.entities.Category;
import com.denisson.backend.abstracter.useCases.CreateAbstracterUseCase;

public class CreateCategoryUseCase extends CreateAbstracterUseCase<Category, CategoriesRepository> {

    public CreateCategoryUseCase(CategoriesRepository repository) {
        super(repository);
    }

}
