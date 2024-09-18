package com.denisson.backend.product.useCases;

import com.denisson.backend.abstracter.entities.GeneralException;
import com.denisson.backend.abstracter.useCases.CreateAbstracterUseCase;
import com.denisson.backend.product.adapters.repository.ProductRepository;
import com.denisson.backend.product.entities.Product;

public class CreateProductUseCase extends CreateAbstracterUseCase<Product, ProductRepository> {

    public CreateProductUseCase(ProductRepository productRepository) {
        super(productRepository);
    }
}
