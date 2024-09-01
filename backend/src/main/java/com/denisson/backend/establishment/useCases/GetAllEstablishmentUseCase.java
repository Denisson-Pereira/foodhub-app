package com.denisson.backend.establishment.useCases;

import com.denisson.backend.establishment.adapters.repository.EstablishmentRepository;
import com.denisson.backend.establishment.entities.Establishment;

import java.util.List;

public class GetAllEstablishmentUseCase {
    private final EstablishmentRepository establishmentRepository;

    public GetAllEstablishmentUseCase(EstablishmentRepository establishmentRepository) {
        this.establishmentRepository = establishmentRepository;
    }

    public List<Establishment> execute() {
        return establishmentRepository.findAll();
    }
}
