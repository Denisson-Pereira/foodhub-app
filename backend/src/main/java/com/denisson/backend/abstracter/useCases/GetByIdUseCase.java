package com.denisson.backend.abstracter.useCases;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.exceptions.IdNotFoundException;

import java.util.Optional;

public abstract class GetByIdUseCase<T> {
    private final AbstractRepository<T> repository;

    public GetByIdUseCase(AbstractRepository<T> repository) {
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
