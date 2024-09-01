package com.denisson.backend.categories.adapters.controllers;

import com.denisson.backend.categories.entities.Category;
import com.denisson.backend.categories.entities.GeneralException;
import com.denisson.backend.categories.useCases.CreateCategoryUseCase;
import com.denisson.backend.categories.useCases.ReadAllCategoriesUseCase;
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
    ReadAllCategoriesUseCase readAllCategoriesUseCase;

    @PostMapping()
    public ResponseEntity<Object> createCategory(@RequestBody Category category) {
        try {
            return ResponseEntity.ok(createCategoryUseCase.execute(category));
        } catch (GeneralException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<List<Category>> readCategories() {
        return ResponseEntity.ok(readAllCategoriesUseCase.execute());
    }
}
