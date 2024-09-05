package com.denisson.backend.establishment.useCases;

import com.denisson.backend.common.GeneralException;
import com.denisson.backend.establishment.adapters.repository.EstablishmentRepository;
import com.denisson.backend.establishment.entities.Establishment;

public class CreateEstablishmentUseCase {
    private final EstablishmentRepository establishmentRepository;

    public CreateEstablishmentUseCase(EstablishmentRepository establishmentRepository) {
        this.establishmentRepository = establishmentRepository;
    }

    public Establishment execute(Establishment establishment) {
        if (establishmentRepository.existsByName(establishment.getName())) {
            throw new GeneralException(String.format("Name %s already exist!", establishment.getName()));
        }
        return establishmentRepository.save(establishment);
    }
}
