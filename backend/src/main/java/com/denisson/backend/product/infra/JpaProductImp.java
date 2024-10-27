package com.denisson.backend.product.infra;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.product.adapter.interfaces.SpringProduct;
import com.denisson.backend.product.entity.Product;

@Repository
public class JpaProductImp implements AbstractRepository<Product>{
    private final SpringProduct repository;

    public JpaProductImp(SpringProduct repository) {
        this.repository = repository;
    }

    @Override
    public Product save(Product value) {
        return repository.save(value);
    }

    @Override
    public List<Product> getAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Product> getById(Long id) {
        return repository.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return repository.existsById(id);
    }

    @Override
    public boolean existsName(String name) {
        return repository.existsByName(name);
    }

    @Override
    public Optional<Product> findByName(String name) {
        return repository.findByName(name);
    }
}
