package com.denisson.backend.product.useCases;

import com.denisson.backend.abstracter.entities.GeneralException;
import com.denisson.backend.abstracter.useCases.DeleteAbstracterByIdUseCase;
import com.denisson.backend.product.adapters.repository.ProductRepository;
import com.denisson.backend.product.entities.Product;

public class DeleteProductByIdUseCase extends DeleteAbstracterByIdUseCase<Product, ProductRepository> {

    public DeleteProductByIdUseCase(ProductRepository productRepository) {
        super(productRepository);
    }
}
