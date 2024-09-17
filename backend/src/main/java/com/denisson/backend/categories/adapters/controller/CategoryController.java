package com.denisson.backend.categories.adapters.controller;

import com.denisson.backend.categories.adapters.DTO.CategoryDTO;
import com.denisson.backend.categories.entities.Category;
import com.denisson.backend.categories.useCases.*;
import com.denisson.backend.abstracter.adapters.controller.ControllerAbstracter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("categories")
public class CategoryController extends ControllerAbstracter<Category, Long, CategoryDTO> {

    @Autowired
    CreateCategoryUseCase createCategoryUseCase;
    @Autowired
    GetAllCategoriesUseCase getAllCategoriesUseCase;
    @Autowired
    GetCategoryByIdUseCase getCategoryByIdUseCase;
    @Autowired
    UpdateCategoryByIdUseCase updateCategoryByIdUseCase;
    @Autowired
    DeleteCategoryByIdUseCase deleteCategoryByIdUseCase;


    @Override
    protected Object createUseCase(Category category) {
        return createCategoryUseCase.execute(category);
    }

    @Override
    protected List<Category> getAllUseCase() {
        return getAllCategoriesUseCase.execute();
    }

    @Override
    protected Object getByIdUseCase(Long id) {
        return getCategoryByIdUseCase.execute(id);
    }

    @Override
    protected Object updateByIdUseCase(Long id, CategoryDTO categoryDTO) {
        return updateCategoryByIdUseCase.execute(id, categoryDTO);
    }

    @Override
    protected String deleteByIdUseCase(Long id) {
        return deleteCategoryByIdUseCase.execute(id);
    }
}
