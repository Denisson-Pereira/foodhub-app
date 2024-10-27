package com.denisson.backend.product.adapter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denisson.backend.abstracter.adapter.controller.AbstractController;
import com.denisson.backend.product.adapter.dtos.ProductDTO;
import com.denisson.backend.product.entity.Product;
import com.denisson.backend.product.useCases.CreateProductUseCase;
import com.denisson.backend.product.useCases.DeleteByIdProductUseCase;
import com.denisson.backend.product.useCases.GetAllProductUseCase;
import com.denisson.backend.product.useCases.GetByIdProductUSeCase;
import com.denisson.backend.product.useCases.UpdateByIdProductUseCase;

@RestController
@RequestMapping("products")
public class ProductController extends AbstractController<Product, Long, ProductDTO> {

    @Autowired
    CreateProductUseCase createProductUseCase;
    @Autowired
    GetAllProductUseCase getAllProductUseCase;
    @Autowired
    GetByIdProductUSeCase getByIdProductUSeCase;
    @Autowired
    UpdateByIdProductUseCase updateByIdProductUseCase;
    @Autowired
    DeleteByIdProductUseCase deleteByIdProductUseCase;

    @Override
    protected Object executeCreateUseCase(Product entity) {
        return createProductUseCase.create(entity);
    }

    @Override
    protected List<Product> executeGetAllUseCase() {
        return getAllProductUseCase.getAll();
    }

    @Override
    protected Object executeGetByIdUseCase(Long id) {
        return getByIdProductUSeCase.getById(id);
    }

    @Override
    protected Object executeUpdateByIdUseCase(Long id, ProductDTO dto) {
        return updateByIdProductUseCase.execute(id, dto);
    }

    @Override
    protected String executeDeleteByIdUseCase(Long id) {
        return deleteByIdProductUseCase.deleteById(id);
    }

    
}
