package com.denisson.backend.product.useCases;

import com.denisson.backend.abstracter.entities.GeneralException;
import com.denisson.backend.product.adapters.repository.ProductRepository;
import com.denisson.backend.product.entities.Product;

import java.util.Optional;

public class GetProductByIdUseCase {
    private final ProductRepository productRepository;

    public GetProductByIdUseCase(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Optional<Product> execute(Long id) {
        if (productRepository.existsById(id)) {
            return productRepository.findById(id);
        }

        throw new GeneralException(String.format("Id %s not found!", id));
    }
}
