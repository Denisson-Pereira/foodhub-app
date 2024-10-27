package com.denisson.backend.product.useCases;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.abstracter.useCases.CreateAbstractUseCase;
import com.denisson.backend.product.entity.Product;

public class CreateProductUseCase extends CreateAbstractUseCase<Product>{

    public CreateProductUseCase(AbstractRepository<Product> repository) {
        super(repository);
    }

}
