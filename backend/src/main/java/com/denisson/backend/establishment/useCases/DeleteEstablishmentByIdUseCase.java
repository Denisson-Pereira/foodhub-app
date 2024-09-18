package com.denisson.backend.establishment.useCases;


import com.denisson.backend.abstracter.entities.GeneralException;
import com.denisson.backend.establishment.adapters.repository.EstablishmentRepository;

public class DeleteEstablishmentByIdUseCase {
    private final EstablishmentRepository establishmentRepository;

    public DeleteEstablishmentByIdUseCase(EstablishmentRepository establishmentRepository) {
        this.establishmentRepository = establishmentRepository;
    }

    public String execute(Long id) {
        if (establishmentRepository.existsById(id)) {
            establishmentRepository.delete(id);
            return String.format("Establishment with id = %s deleted!", id);
        }

        throw new GeneralException(String.format("Id %s not found!", id));
    }
}
