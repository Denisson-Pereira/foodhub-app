package com.denisson.backend.common;

import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface AbstracterInterface<T, ID, DTO> {

    ResponseEntity<Object> create(T entity);
    ResponseEntity<List<T>> getAll();
    ResponseEntity<Object> getById(ID id);
    ResponseEntity<Object> updateById(ID id, DTO dto);
    ResponseEntity<String> deleteById(ID id);

}