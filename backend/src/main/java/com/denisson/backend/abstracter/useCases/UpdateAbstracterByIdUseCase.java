package com.denisson.backend.abstracter.useCases;

import com.denisson.backend.abstracter.adapters.DTO.DTOAbstracter;
import com.denisson.backend.abstracter.adapters.repository.RepositoryAbstracter;
import com.denisson.backend.abstracter.entities.EntityAbstract;
import com.denisson.backend.abstracter.entities.GeneralException;

import java.util.Optional;

public abstract class UpdateAbstracterByIdUseCase<T extends EntityAbstract, DTO extends DTOAbstracter, Repository extends RepositoryAbstracter<T>> {
    private final Repository repository;

    protected UpdateAbstracterByIdUseCase(Repository repository) {
        this.repository = repository;
    }

    public final T execute(Long id, DTO dto) {
        T entity = findEntityById(id, dto);
        validateNameUniqueness(id, dto);
        updateFields(entity, dto);
        return saveEntity(entity);
    }

    private T findEntityById(Long id, DTO dto) {
        return repository.findById(id)
                .orElseThrow(() -> new GeneralException(String.format("%s not found for id = " + id, dto.getName())));
    }

    private void validateNameUniqueness(Long id, DTO dto) {
        Optional<T> entityWithName = repository.findByName(dto.getName());
        if (entityWithName.isPresent() && !entityWithName.get().getId().equals(id)) {
            throw new GeneralException(String.format("Name %s already exists!", dto.getName()));
        }
    }

    protected abstract void updateFields(T entity, DTO dto);

    private T saveEntity(T entity) {
        return repository.save(entity);
    }
}
