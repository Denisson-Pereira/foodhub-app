package com.denisson.backend.abstracter.useCases;

import com.denisson.backend.abstracter.adapters.repository.RepositoryAbstracter;

public abstract class DeleteAbstracterByIdUseCase<T, Repository extends RepositoryAbstracter<T>> {

    private final Repository repository;

    protected DeleteAbstracterByIdUseCase(Repository repository) {
        this.repository = repository;
    }

    public String execute(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return String.format("Id %s deleted", id);
        }
        throw new GeneralException(String.format("Id %s not found!", id));
    }
}
