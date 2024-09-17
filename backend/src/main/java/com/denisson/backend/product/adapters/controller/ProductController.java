package com.denisson.backend.product.adapters.controller;

import com.denisson.backend.common.AbstracterController;
import com.denisson.backend.product.adapters.DTO.ProductDTO;
import com.denisson.backend.product.entities.Product;
import com.denisson.backend.product.useCases.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("products")
public class ProductController extends AbstracterController<Product, Long, ProductDTO> {

    @Autowired
    CreateProductUseCase createProductUseCase;
    @Autowired
    GetAllProductUseCase getAllProductUseCase;
    @Autowired
    GetProductByIdUseCase getProductByIdUseCase;
    @Autowired
    UpdateProductByIdUseCase updateProductByIdUseCase;
    @Autowired
    DeleteProductByIdUseCase deleteProductByIdUseCase;


    @Override
    protected Object createUseCase(Product product) {
        return createProductUseCase.execute(product);
    }

    @Override
    protected List<Product> getAllUseCase() {
        return getAllProductUseCase.execute();
    }

    @Override
    protected Object getByIdUseCase(Long id) {
        return getProductByIdUseCase.execute(id);
    }

    @Override
    protected Object updateByIdUseCase(Long id, ProductDTO productDTO) {
        return updateProductByIdUseCase.execute(id, productDTO);
    }

    @Override
    protected String deleteByIdUseCase(Long id) {
        return deleteProductByIdUseCase.execute(id);
    }
}
