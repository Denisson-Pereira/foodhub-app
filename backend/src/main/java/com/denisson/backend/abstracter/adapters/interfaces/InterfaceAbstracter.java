package com.denisson.backend.abstracter.adapters.interfaces;

import org.springframework.http.ResponseEntity;

import java.util.List;

public interface InterfaceAbstracter<T, ID, DTO> {

    ResponseEntity<Object> create(T entity);
    ResponseEntity<List<T>> getAll();
    ResponseEntity<Object> getById(ID id);
    ResponseEntity<Object> updateById(ID id, DTO dto);
    ResponseEntity<String> deleteById(ID id);

}