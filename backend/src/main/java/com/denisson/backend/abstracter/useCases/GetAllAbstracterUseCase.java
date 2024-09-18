package com.denisson.backend.abstracter.useCases;

import com.denisson.backend.abstracter.adapters.repository.RepositoryAbstracter;

import java.util.List;

public abstract class GetAllAbstracterUseCase<T, Repository extends RepositoryAbstracter<T>> {
    private final Repository repository;

    protected GetAllAbstracterUseCase(Repository repository) {
        this.repository = repository;
    }

    public List<T> execute() {
        return repository.findAll();
    }
}
