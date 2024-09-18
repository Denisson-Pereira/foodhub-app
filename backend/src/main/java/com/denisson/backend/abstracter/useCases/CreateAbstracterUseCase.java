package com.denisson.backend.abstracter.useCases;

import com.denisson.backend.abstracter.adapters.repository.RepositoryAbstracter;
import com.denisson.backend.abstracter.entities.Entity;
import com.denisson.backend.abstracter.entities.GeneralException;

public abstract class CreateAbstracterUseCase<T extends Entity, Repository extends RepositoryAbstracter<T>>  {

    private final Repository repository;

    public CreateAbstracterUseCase(Repository repository) {
        this.repository = repository;
    }

    public T execute(T t) {
        if (repository.existsByName(t.getName())) {
            throw new GeneralException(String.format("The %s name already exists!", t.getName()));
        }
        return repository.save(t);
    }

}
