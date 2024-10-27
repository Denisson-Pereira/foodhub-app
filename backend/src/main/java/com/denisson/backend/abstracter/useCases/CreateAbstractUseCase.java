package com.denisson.backend.abstracter.useCases;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.abstracter.entitiy.AbstractEntity;

public abstract class CreateAbstractUseCase<T extends AbstractEntity> {
    private final AbstractRepository<T> repository;

    public CreateAbstractUseCase(AbstractRepository<T> repository) {
        this.repository = repository;
    }

    public T create(T value) {
        if(repository.existsName(value.getName())) {
            throw new IllegalArgumentException("Entity with name " + value.getName() + " already exists");
        }
        return repository.save(value);
    }
}
