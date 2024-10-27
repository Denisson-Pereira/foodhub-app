package com.denisson.backend.product.useCases;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.abstracter.useCases.GetAllAbstractUseCase;
import com.denisson.backend.product.entity.Product;

public class GetAllProductUseCase extends GetAllAbstractUseCase<Product>{

    public GetAllProductUseCase(AbstractRepository<Product> repository) {
        super(repository);
    }
    
}
