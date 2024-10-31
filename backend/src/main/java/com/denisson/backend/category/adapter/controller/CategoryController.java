package com.denisson.backend.category.adapter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denisson.backend.abstracter.adapter.controller.AbstractController;
import com.denisson.backend.category.adapter.dtos.CategoryDTO;
import com.denisson.backend.category.entity.Category;
import com.denisson.backend.category.useCases.GetAllCategoryUseCase;
import com.denisson.backend.category.useCases.GetByIdCategoryUseCase;

@RestController
@RequestMapping("categories")
public class CategoryController extends AbstractController<Category, Long, CategoryDTO> {

    @Autowired
    GetAllCategoryUseCase getAllCategoryUseCase;
    @Autowired
    GetByIdCategoryUseCase getByIdCategoryUseCase;

    @Override
    protected Object executeCreateUseCase(Category entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'executeCreateUseCase'");
    }

    @Override
    protected List<Category> executeGetAllUseCase() {
        return getAllCategoryUseCase.getAll();
    }

    @Override
    protected Object executeGetByIdUseCase(Long id) {
        return getByIdCategoryUseCase.getById(id);
    }

    @Override
    protected Object executeUpdateByIdUseCase(Long id, CategoryDTO dto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'executeUpdateByIdUseCase'");
    }

    @Override
    protected String executeDeleteByIdUseCase(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'executeDeleteByIdUseCase'");
    }
    
}
