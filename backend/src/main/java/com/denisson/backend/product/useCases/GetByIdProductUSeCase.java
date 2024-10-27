package com.denisson.backend.product.useCases;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.abstracter.useCases.GetByIdUseCase;
import com.denisson.backend.product.entity.Product;

public class GetByIdProductUSeCase extends GetByIdUseCase<Product>{

    public GetByIdProductUSeCase(AbstractRepository<Product> repository) {
        super(repository);
    }

    @Override
    protected String getNameEntity() {
        return "String";
    }
    
}
