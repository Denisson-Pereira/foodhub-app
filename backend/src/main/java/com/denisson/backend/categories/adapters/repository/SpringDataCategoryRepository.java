package com.denisson.backend.categories.adapters.repository;

import com.denisson.backend.categories.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpringDataCategoryRepository extends JpaRepository<Category, Long> {
    boolean existsByName(String nome);
}
