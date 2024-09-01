package com.denisson.backend.categories.drivers;

import com.denisson.backend.categories.adapters.repository.CategoriesRepository;
import com.denisson.backend.categories.useCases.CreateCategoryUseCase;
import com.denisson.backend.categories.useCases.ReadAllCategoriesUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CategoryConf {
    @Bean
    public CreateCategoryUseCase createCategoryUseCase(CategoriesRepository categoriesRepository) {
        return new CreateCategoryUseCase(categoriesRepository);
    }

    @Bean
    public ReadAllCategoriesUseCase readAllCategoriesUseCase(CategoriesRepository categoriesRepository) {
        return new ReadAllCategoriesUseCase((categoriesRepository));
    }
}
