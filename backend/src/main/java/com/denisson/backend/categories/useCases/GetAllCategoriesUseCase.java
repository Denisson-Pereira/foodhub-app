package com.denisson.backend.categories.useCases;

import com.denisson.backend.abstracter.adapters.repository.RepositoryAbstracter;
import com.denisson.backend.abstracter.useCases.GetAllAbstracterUseCase;
import com.denisson.backend.categories.adapters.repository.CategoriesRepository;
import com.denisson.backend.categories.entities.Category;

import java.util.List;

public class GetAllCategoriesUseCase extends GetAllAbstracterUseCase<Category, CategoriesRepository> {

    public GetAllCategoriesUseCase(CategoriesRepository categoriesRepository) {
        super(categoriesRepository);
    }
}
