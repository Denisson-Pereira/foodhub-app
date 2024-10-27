package com.denisson.backend.product.useCases;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.abstracter.useCases.UpdateAbstractByIdUseCase;
import com.denisson.backend.product.adapter.dtos.ProductDTO;
import com.denisson.backend.product.entity.Product;

public class UpdateByIdProductUseCase extends UpdateAbstractByIdUseCase<Product, ProductDTO, AbstractRepository<Product>> {

    public UpdateByIdProductUseCase(AbstractRepository<Product> repository) {
        super(repository);
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
