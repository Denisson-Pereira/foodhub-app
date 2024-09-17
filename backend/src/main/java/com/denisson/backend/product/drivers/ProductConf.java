package com.denisson.backend.product.drivers;

import com.denisson.backend.establishment.useCases.UpdateEstablishmentByIdUseCase;
import com.denisson.backend.product.adapters.repository.ProductRepository;
import com.denisson.backend.product.useCases.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProductConf {

    @Bean
    public CreateProductUseCase createProductUseCase(ProductRepository productRepository) {
        return new CreateProductUseCase(productRepository);
    }

    @Bean
    public GetAllProductUseCase getAllProductUseCase(ProductRepository productRepository) {
        return new GetAllProductUseCase(productRepository);
    }

    @Bean
    public GetProductByIdUseCase getProductByIdUseCase(ProductRepository productRepository) {
        return new GetProductByIdUseCase(productRepository);
    }

    @Bean
    public UpdateProductByIdUseCase updateProductByIdUseCase(ProductRepository productRepository) {
        return new UpdateProductByIdUseCase(productRepository);
    }

    @Bean
    public DeleteProductByIdUseCase deleteProductByIdUseCase(ProductRepository productRepository) {
        return new DeleteProductByIdUseCase(productRepository);
    }

}
