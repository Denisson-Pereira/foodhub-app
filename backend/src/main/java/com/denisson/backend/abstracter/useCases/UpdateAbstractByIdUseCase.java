package com.denisson.backend.abstracter.useCases;

import java.util.Optional;

import com.denisson.backend.abstracter.adapter.gateway.AbstractRepository;
import com.denisson.backend.abstracter.adapter.interfaces.AbstractDTOInterface;
import com.denisson.backend.abstracter.entitiy.AbstractEntity;
import com.denisson.backend.exceptions.GeneralException;
import com.denisson.backend.exceptions.IdNotFoundException;

public abstract class UpdateAbstractByIdUseCase<T extends AbstractEntity, DTO extends AbstractDTOInterface, Repository extends AbstractRepository<T>> {
    private final Repository repository;

    public UpdateAbstractByIdUseCase(Repository repository) {
        this.repository = repository;
    }

    public T execute(Long id, DTO dto) {
        T entity = findEntityById(id, dto);
        validateNameUniqueness(id, dto);
        updateFields(entity, dto);
        return saveEntity(entity);
    }

    private T findEntityById(Long id, DTO dto) {
        return repository.getById(id)
                .orElseThrow(() -> new IdNotFoundException(dto.getName(), id));
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
