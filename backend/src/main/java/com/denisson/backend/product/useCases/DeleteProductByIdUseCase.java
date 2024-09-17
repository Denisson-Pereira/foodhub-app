package com.denisson.backend.product.useCases;

import com.denisson.backend.common.GeneralException;
import com.denisson.backend.product.adapters.repository.ProductRepository;

public class DeleteProductByIdUseCase {
    private final ProductRepository productRepository;

    public DeleteProductByIdUseCase(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public String execute(Long id) {
        if(productRepository.existsById(id)) {
            productRepository.delete(id);
            return String.format("Product with if %s deleted!", id);
        }

        throw new GeneralException(String.format("Id %s not found!", id));
    }
}
