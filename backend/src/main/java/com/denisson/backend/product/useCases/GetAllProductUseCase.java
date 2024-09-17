package com.denisson.backend.product.useCases;

import com.denisson.backend.product.adapters.repository.ProductRepository;
import com.denisson.backend.product.entities.Product;

import java.util.List;

public class GetAllProductUseCase {
    private final ProductRepository productRepository;

    public GetAllProductUseCase(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> execute() {
        return productRepository.findAll();
    }
}
