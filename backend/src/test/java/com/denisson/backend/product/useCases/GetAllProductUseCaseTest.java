package com.denisson.backend.product.useCases;

import com.denisson.backend.product.adapters.repository.JpaProductRepository;
import com.denisson.backend.product.entities.Product;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class GetAllProductUseCaseTest {

    @Autowired
    private JpaProductRepository jpaProductRepository;

    private GetAllProductUseCase getAllProductUseCase;

    @BeforeEach
    void setUp() {
        getAllProductUseCase = new GetAllProductUseCase(jpaProductRepository);
    }

    @Test
    void shouldReturnAllProducts() {
        List<Product> products = getAllProductUseCase.execute();

        assertNotNull(products);
        assertFalse(products.isEmpty());

        Product firstProduct = products.get(0);
        assertNotNull(firstProduct.getId());
        assertNotNull(firstProduct.getName());
    }
}
