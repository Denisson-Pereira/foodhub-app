package com.denisson.backend.product.adapters.repository;

import com.denisson.backend.product.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SpringDataProductRepository extends JpaRepository<Product, Long> {
    boolean existsByName(String name);
    Optional<Product> findByName(String name);
}
