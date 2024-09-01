package com.denisson.backend.categories.adapters.controllers;

import com.denisson.backend.categories.entities.Category;
import com.denisson.backend.categories.entities.GeneralException;
import com.denisson.backend.categories.useCases.CreateCategoryUseCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("categories")
public class CategoryController {

    @Autowired
    CreateCategoryUseCase createCategoryUseCase;

    @PostMapping()
    public ResponseEntity<Object> createCategory(@RequestBody Category category) {
        try {
            return ResponseEntity.ok(createCategoryUseCase.execute(category));
        } catch (GeneralException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
