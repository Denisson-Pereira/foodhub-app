package com.denisson.backend.abstracter.useCases;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.exceptions.IdNotFoundException;

import java.util.Optional;

public abstract class GeyByIdUseCase<T> {
    private final AbstractRepository<T> repository;

    public GeyByIdUseCase(AbstractRepository<T> repository) {
        this.repository = repository;
    }

    public Optional<T> getById(Long id) {
        if(!repository.existsById(id)) {
            throw new IdNotFoundException(getNameEntity(), id);
        } 
        return repository.getById(id);
    }

    protected abstract String getNameEntity();
}
