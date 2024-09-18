package com.denisson.backend.product.useCases;

import com.denisson.backend.abstracter.entities.GeneralException;
import com.denisson.backend.abstracter.useCases.UpdateAbstracterByIdUseCase;
import com.denisson.backend.product.adapters.DTO.ProductDTO;
import com.denisson.backend.product.adapters.repository.ProductRepository;
import com.denisson.backend.product.entities.Product;

import java.util.Optional;

public class UpdateProductByIdUseCase extends UpdateAbstracterByIdUseCase<Product, ProductDTO, ProductRepository> {


    public UpdateProductByIdUseCase(ProductRepository productRepository) {
        super(productRepository);
    }

    @Override
    protected void updateFields(Product product, ProductDTO productDTO) {

        product.setName(productDTO.name());
        product.setEvaluation(productDTO.evaluation());
        product.setDescription(productDTO.description());
        product.setPrice(productDTO.price());
        product.setCategory(productDTO.category());
        product.setEstablishment(productDTO.establishment());
        product.setImage(productDTO.image());

    }
}
