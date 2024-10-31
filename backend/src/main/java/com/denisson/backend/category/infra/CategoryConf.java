package com.denisson.backend.category.infra;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.category.entity.Category;
import com.denisson.backend.category.useCases.GetAllCategoryUseCase;
import com.denisson.backend.category.useCases.GetByIdCategoryUseCase;

@Configuration
public class CategoryConf {
    
    @Bean
    public GetAllCategoryUseCase getAllCategoryUseCase(AbstractRepository<Category> categoryRepository) {
        return new GetAllCategoryUseCase(categoryRepository);
    }

    @Bean
    public GetByIdCategoryUseCase getByIdCategoryUseCase(AbstractRepository<Category> categoryRepository) {
        return new GetByIdCategoryUseCase(categoryRepository);
    }
}
