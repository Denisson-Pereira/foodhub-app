package com.denisson.backend.categories.useCases;

import com.denisson.backend.abstracter.useCases.GetAbstracterByIdUseCase;
import com.denisson.backend.categories.adapters.repository.CategoriesRepository;
import com.denisson.backend.categories.entities.Category;

public class GetCategoryByIdUseCase extends GetAbstracterByIdUseCase<Category, CategoriesRepository> {

    public GetCategoryByIdUseCase(CategoriesRepository categoriesRepository) {
        super(categoriesRepository);
    }
}
