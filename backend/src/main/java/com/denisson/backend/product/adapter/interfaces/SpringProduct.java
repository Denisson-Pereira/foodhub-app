package com.denisson.backend.product.adapter.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;
import com.denisson.backend.product.entity.Product;

import java.util.Optional;

public interface SpringProduct extends JpaRepository<Product, Long> {
    boolean existsByName(String name);
    Optional<Product> findByName(String name);
}
