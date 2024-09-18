package com.denisson.backend.abstracter.useCases;

import com.denisson.backend.abstracter.adapters.repository.RepositoryAbstracter;
import com.denisson.backend.abstracter.entities.GeneralException;

import java.util.Optional;

public abstract class GetAbstracterByIdUseCase<T, Repository extends RepositoryAbstracter<T>> {
    private final Repository repository;

    protected GetAbstracterByIdUseCase(Repository repository) {
        this.repository = repository;
    }

    public Optional<T> execute(Long id) {
        if (repository.existsById(id)) {
            return repository.findById(id);
        }
        throw new GeneralException(String.format("Id %s not found!", id));
    }

}
