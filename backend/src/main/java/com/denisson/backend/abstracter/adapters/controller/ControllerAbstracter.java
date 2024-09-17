package com.denisson.backend.abstracter.adapters.controller;

import com.denisson.backend.abstracter.adapters.interfaces.InterfaceAbstracter;
import com.denisson.backend.abstracter.useCases.GeneralException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public abstract class ControllerAbstracter<T, ID, DTO> implements InterfaceAbstracter<T, ID, DTO> {

    @PostMapping()
    public ResponseEntity<Object> create(@RequestBody T entity) {
        try {
            return ResponseEntity.ok(createUseCase(entity));
        } catch (GeneralException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<List<T>> getAll() {
        return ResponseEntity.ok(getAllUseCase());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable ID id) {
        try {
            return ResponseEntity.ok(getByIdUseCase(id));
        } catch (GeneralException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateById(@PathVariable ID id, @RequestBody DTO dto) {
        try {
            return ResponseEntity.ok(updateByIdUseCase(id, dto));
        } catch (GeneralException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable ID id) {
        try {
            return ResponseEntity.ok(deleteByIdUseCase(id));
        } catch (GeneralException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    protected abstract Object createUseCase(T entity);
    protected abstract List<T> getAllUseCase();
    protected abstract Object getByIdUseCase(ID id);
    protected abstract Object updateByIdUseCase(ID id, DTO dto);
    protected abstract String deleteByIdUseCase(ID id);
}
