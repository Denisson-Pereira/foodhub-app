package com.denisson.backend.product.useCases;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.abstracter.useCases.DeleteByIdAbstractUseCase;
import com.denisson.backend.product.entity.Product;

public class DeleteByIdProductUseCase extends DeleteByIdAbstractUseCase<Product>{

    public DeleteByIdProductUseCase(AbstractRepository<Product> repository) {
        super(repository);
    }

    @Override
    protected String getNameEntity() {
        return "Product";
    }

    
}
