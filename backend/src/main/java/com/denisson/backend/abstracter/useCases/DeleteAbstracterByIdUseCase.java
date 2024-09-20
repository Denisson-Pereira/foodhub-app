package com.denisson.backend.abstracter.useCases;

import com.denisson.backend.abstracter.adapters.repository.RepositoryAbstracter;
import com.denisson.backend.abstracter.entities.GeneralException;

public abstract class DeleteAbstracterByIdUseCase<T, Repository extends RepositoryAbstracter<T>> {

    private final Repository repository;

    protected DeleteAbstracterByIdUseCase(Repository repository) {
        this.repository = repository;
    }

    public final String execute(Long id) {
        validateId(id);
        T entity = findEntityById(id);
        return deleteById(id);
    }

    private void validateId(Long id) {
        if (id == null || id <= 0) {
            throw new IllegalArgumentException(String.format("Id %s not valid!", id));
        }
    }

    private T findEntityById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new GeneralException(String.format("Entity with id %s not found!", id)));
    }

    private String deleteById(Long id) {
        repository.deleteById(id);
        return String.format("Entity with id %s deleted successfully!", id);
    }

}
