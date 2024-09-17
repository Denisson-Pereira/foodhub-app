package com.denisson.backend.product.useCases;

import com.denisson.backend.abstracter.useCases.GeneralException;
import com.denisson.backend.product.adapters.repository.ProductRepository;
import com.denisson.backend.product.entities.Product;

public class CreateProductUseCase {
    private final ProductRepository productRepository;

    public CreateProductUseCase(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product execute(Product product) {
        if (!productRepository.existsByEstablishment(product.getEstablishment())) {
            throw new GeneralException(String.format("Establishment %s not found!", product.getEstablishment()));
        }

        return productRepository.save(product);
    }
}
