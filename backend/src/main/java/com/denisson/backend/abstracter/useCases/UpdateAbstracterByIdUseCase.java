package com.denisson.backend.abstracter.useCases;

import com.denisson.backend.abstracter.adapters.DTO.DTOAbstracter;
import com.denisson.backend.abstracter.adapters.repository.RepositoryAbstracter;
import com.denisson.backend.abstracter.entities.Entity;
import com.denisson.backend.abstracter.entities.GeneralException;

import java.util.Optional;

public abstract class UpdateAbstracterByIdUseCase<T extends Entity, DTO extends DTOAbstracter, Repository extends RepositoryAbstracter<T>> {
    private final Repository repository;

    protected UpdateAbstracterByIdUseCase(Repository repository) {
        this.repository = repository;
    }

    public T execute(Long id, DTO dto) {
        Optional<T> optionalT = repository.findById(id);
        T entity = optionalT
                .orElseThrow(() -> new GeneralException(String.format("%s not found for id = " + id, dto.getName())));
        Optional<T> tWithName = repository.findByName(dto.getName());

        if (tWithName.isPresent() && !tWithName.get().getId().equals(id)) {
            throw new GeneralException(String.format("Name %s already exists!", dto.getName()));
        }

        updateFields(entity, dto);

        return repository.save(entity);
    }

    protected abstract void updateFields(T entity, DTO dto);
}
