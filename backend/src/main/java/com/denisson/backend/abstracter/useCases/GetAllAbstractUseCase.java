package com.denisson.backend.abstracter.useCases;

import java.util.List;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;

public abstract class GetAllAbstractUseCase<T> {
    private final AbstractRepository<T> repository;

    public GetAllAbstractUseCase(AbstractRepository<T> repository) {
        this.repository = repository;
    }
    
    public List<T> getAll() {
        return repository.getAll();
    }
}
