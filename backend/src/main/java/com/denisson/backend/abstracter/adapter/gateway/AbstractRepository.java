package com.denisson.backend.abstracter.adapter.gateway;

import java.util.List;
import java.util.Optional;

public interface AbstractRepository<T> {
    T save(T value);
    List<T> getAll();
    Optional<T> getById(Long id);
    Void deleteById(Long id);
    boolean existsById(Long id);
    boolean existsName(String name);
    Optional<T> findByName(String name);
}
