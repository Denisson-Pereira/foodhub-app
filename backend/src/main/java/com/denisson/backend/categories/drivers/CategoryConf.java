package com.denisson.backend.categories.drivers;

import com.denisson.backend.categories.adapters.repository.CategoriesRepository;
import com.denisson.backend.categories.useCases.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CategoryConf {
    @Bean
    public CreateCategoryUseCase createCategoryUseCase(CategoriesRepository categoriesRepository) {
        return new CreateCategoryUseCase(categoriesRepository);
    }

    @Bean
    public GetAllCategoriesUseCase readAllCategoriesUseCase(CategoriesRepository categoriesRepository) {
        return new GetAllCategoriesUseCase(categoriesRepository);
    }

    @Bean
    public GetCategoryByIdUseCase getCategoryByIdUseCase(CategoriesRepository categoriesRepository) {
        return new GetCategoryByIdUseCase(categoriesRepository);
    }

    @Bean
    public UpdateCategoryByIdUseCase updateCategoryByIdUseCase(CategoriesRepository categoriesRepository) {
        return new UpdateCategoryByIdUseCase(categoriesRepository);
    }

    @Bean
    public DeleteCategoryByIdUseCase deleteCategoryById(CategoriesRepository categoriesRepository) {
        return new DeleteCategoryByIdUseCase(categoriesRepository);
    }
}
