package com.denisson.backend.abstracter.useCases;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.exceptions.IdNotFoundException;

public abstract class DeleteByIdAbstractUseCase<T> {
    private final AbstractRepository<T> repository;

    public DeleteByIdAbstractUseCase(AbstractRepository<T> repository) {
        this.repository = repository;
    }

    public String deleteById(Long id) {
        if(!repository.existsById(id)) {
            throw new IdNotFoundException(getNameEntity(), id);
        } 
        repository.deleteById(id);
        return String.format("%s with id %s deleted", getNameEntity(), id);
    }

    protected abstract String getNameEntity();
}
