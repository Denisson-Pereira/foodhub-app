package com.denisson.backend.establishment.useCases;

import com.denisson.backend.common.GeneralException;
import com.denisson.backend.establishment.adapters.repository.EstablishmentRepository;
import com.denisson.backend.establishment.entities.Establishment;

import java.util.Optional;

public class GetEstablishmentByIdUseCase {
    private final EstablishmentRepository establishmentRepository;

    public GetEstablishmentByIdUseCase(EstablishmentRepository establishmentRepository) {
        this.establishmentRepository = establishmentRepository;
    }

    public Optional<Establishment> execute(Long id) {
        if (establishmentRepository.existsById(id)) {
            return establishmentRepository.findById(id);
        }

        throw new GeneralException(String.format("Id %s not found!", id));
    }
}
