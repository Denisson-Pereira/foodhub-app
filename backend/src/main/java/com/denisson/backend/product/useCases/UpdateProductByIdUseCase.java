package com.denisson.backend.product.useCases;

import com.denisson.backend.abstracter.useCases.GeneralException;
import com.denisson.backend.product.adapters.DTO.ProductDTO;
import com.denisson.backend.product.adapters.repository.ProductRepository;
import com.denisson.backend.product.entities.Product;

import java.util.Optional;

public class UpdateProductByIdUseCase {
    private final ProductRepository productRepository;

    public UpdateProductByIdUseCase(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product execute(Long id, ProductDTO productDTO) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        Product product = optionalProduct
                .orElseThrow(() -> new GeneralException("Product not found for id = " + id));
        Optional<Product> productWithName = productRepository.findByName(productDTO.name());

        if (productWithName.isPresent() && !productWithName.get().getId().equals(id)) {
            throw new GeneralException(String.format("Name %s already exists!", productDTO.name()));
        }

        product.setName(productDTO.name());
        product.setEvaluation(productDTO.evaluation());
        product.setDescription(productDTO.description());
        product.setPrice(productDTO.price());
        product.setCategory(productDTO.category());
        product.setEstablishment(productDTO.establishment());
        product.setImage(productDTO.image());

        return productRepository.save(product);
    }
}
