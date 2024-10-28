package com.denisson.backend.product.infra;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.product.entity.Product;
import com.denisson.backend.product.useCases.CreateProductUseCase;
import com.denisson.backend.product.useCases.DeleteByIdProductUseCase;
import com.denisson.backend.product.useCases.GetAllProductUseCase;
import com.denisson.backend.product.useCases.GetByIdProductUSeCase;
import com.denisson.backend.product.useCases.UpdateByIdProductUseCase;

@Configuration
public class ProductConf {
    
    @Bean
    public CreateProductUseCase CreateProductUseCase(AbstractRepository<Product> producAbstractRepository) {
        return new CreateProductUseCase(producAbstractRepository);
    }

    @Bean
    public GetAllProductUseCase getAllProductUseCase(AbstractRepository<Product> productAbstractRepository) {
        return new GetAllProductUseCase(productAbstractRepository);
    }

    @Bean
    public GetByIdProductUSeCase getByIdProductUseCase(AbstractRepository<Product> productAbstractRepository) {
        return new GetByIdProductUSeCase(productAbstractRepository);
    }

    @Bean
    public UpdateByIdProductUseCase updateByIdProductUseCase(AbstractRepository<Product> productAbstractRepository) {
        return new UpdateByIdProductUseCase(productAbstractRepository);
    }

    @Bean
    public DeleteByIdProductUseCase deleteByIdProductUseCase(AbstractRepository<Product> productAbstractRepository) {
        return new DeleteByIdProductUseCase(productAbstractRepository);
    }
}
