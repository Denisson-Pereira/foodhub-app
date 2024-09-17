package com.denisson.backend.product.adapters.repository;

import com.denisson.backend.product.entities.Product;

import java.util.List;
import java.util.Optional;

public interface ProductRepository {

    Product save(Product product);
    List<Product> findAll();
    boolean existsByEstablishment(String establishment);
    boolean existsById(Long id);
    Optional<Product> findById(Long id);
    Optional<Product> findByName(String name);
    void delete(Long id);

}
