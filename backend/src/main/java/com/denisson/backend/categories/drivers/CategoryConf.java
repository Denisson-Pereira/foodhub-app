package com.denisson.backend.categories.drivers;

import com.denisson.backend.categories.adapters.repository.CategoriesRepository;
import com.denisson.backend.categories.useCases.CreateCategoryUseCase;
import com.denisson.backend.categories.useCases.GetAllCategoriesUseCase;
import com.denisson.backend.categories.useCases.GetCategoryByIdUseCase;
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
}
