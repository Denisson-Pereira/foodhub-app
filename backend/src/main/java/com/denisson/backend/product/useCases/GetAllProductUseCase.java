package com.denisson.backend.product.useCases;

import com.denisson.backend.abstracter.useCases.GetAllAbstracterUseCase;
import com.denisson.backend.product.adapters.repository.ProductRepository;
import com.denisson.backend.product.entities.Product;

import java.util.List;

public class GetAllProductUseCase extends GetAllAbstracterUseCase<Product, ProductRepository> {

    public GetAllProductUseCase(ProductRepository productRepository) {
        super(productRepository);
    }
}
