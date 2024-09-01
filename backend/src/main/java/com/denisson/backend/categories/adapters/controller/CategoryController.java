package com.denisson.backend.categories.adapters.controller;

import com.denisson.backend.categories.adapters.DTO.CategoryDTO;
import com.denisson.backend.categories.entities.Category;
import com.denisson.backend.categories.entities.GeneralException;
import com.denisson.backend.categories.useCases.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("categories")
public class CategoryController {

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

    @PostMapping()
    public ResponseEntity<Object> createCategory(@RequestBody Category category) {
        try {
            return ResponseEntity.ok(createCategoryUseCase.execute(category));
        } catch (GeneralException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<List<Category>> getCategories() {
        return ResponseEntity.ok(getAllCategoriesUseCase.execute());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getCategoryById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(getCategoryByIdUseCase.execute(id));
        } catch (GeneralException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateCategory(@PathVariable Long id, @RequestBody CategoryDTO categoryDTO) {
        try {
            return ResponseEntity.ok(updateCategoryByIdUseCase.execute(id, categoryDTO));
        } catch (GeneralException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(deleteCategoryByIdUseCase.execute(id));
        } catch (GeneralException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
