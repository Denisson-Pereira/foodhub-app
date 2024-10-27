package com.denisson.backend.abstracter.adapter.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;

public abstract class AbstractController<T, ID, DTO>{
    @PostMapping()
    public ResponseEntity<Object> create(@RequestBody T entity) {
        try {
            return ResponseEntity.ok(executeCreateUseCase(entity));
        } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<List<T>> getAll() {
        return ResponseEntity.ok(executeGetAllUseCase());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable ID id) {
        try {
            return ResponseEntity.ok(executeGetByIdUseCase(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateById(@PathVariable ID id, @RequestBody DTO dto) {
        try {
            return ResponseEntity.ok(executeUpdateByIdUseCase(id, dto));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable ID id) {
        try {
            return ResponseEntity.ok(executeDeleteByIdUseCase(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    protected abstract Object executeCreateUseCase(T entity);
    protected abstract List<T> executeGetAllUseCase();
    protected abstract Object executeGetByIdUseCase(ID id);
    protected abstract Object executeUpdateByIdUseCase(ID id, DTO dto);
    protected abstract String executeDeleteByIdUseCase(ID id);
}
