package com.denisson.backend.category.useCases;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.abstracter.useCases.GetAllAbstractUseCase;
import com.denisson.backend.category.entity.Category;

public class GetAllCategoryUseCase extends GetAllAbstractUseCase<Category>{

    public GetAllCategoryUseCase(AbstractRepository<Category> repository) {
        super(repository);
    }

}
