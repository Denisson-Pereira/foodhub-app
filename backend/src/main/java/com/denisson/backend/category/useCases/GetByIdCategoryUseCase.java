package com.denisson.backend.category.useCases;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.abstracter.useCases.GetByIdUseCase;
import com.denisson.backend.category.entity.Category;

public class GetByIdCategoryUseCase extends GetByIdUseCase<Category>{
    public GetByIdCategoryUseCase(AbstractRepository<Category> repository) {
        super(repository);
    }

    @Override
    protected String getNameEntity() {
        return "Category";
    }
}
