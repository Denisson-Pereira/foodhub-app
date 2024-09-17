package com.denisson.backend.product.adapters.repository;

import com.denisson.backend.product.entities.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class JpaProductRepository implements ProductRepository {
    private final SpringDataProductRepository repository;

    @Autowired
    public JpaProductRepository(SpringDataProductRepository repository) {
        this.repository = repository;
    }


    @Override
    public Product save(Product product) {
        return repository.save(product);
    }

    @Override
    public List<Product> findAll() {
        return repository.findAll();
    }

    @Override
    public boolean existsByEstablishment(String establishment) {
        return repository.existsByEstablishment(establishment);
    }

    @Override
    public boolean existsById(Long id) {
        return repository.existsById(id);
    }

    @Override
    public Optional<Product> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Optional<Product> findByName(String name) {
        return repository.findByName(name);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
