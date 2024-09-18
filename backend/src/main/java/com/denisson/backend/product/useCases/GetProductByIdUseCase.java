package com.denisson.backend.product.useCases;

import com.denisson.backend.abstracter.entities.GeneralException;
import com.denisson.backend.abstracter.useCases.GetAbstracterByIdUseCase;
import com.denisson.backend.product.adapters.repository.ProductRepository;
import com.denisson.backend.product.entities.Product;

import java.util.Optional;

public class GetProductByIdUseCase extends GetAbstracterByIdUseCase<Product, ProductRepository> {

    public GetProductByIdUseCase(ProductRepository productRepository) {
        super(productRepository);
    }
}
