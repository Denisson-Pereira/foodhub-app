package com.denisson.backend.establishment.useCases;


import com.denisson.backend.abstracter.entities.GeneralException;
import com.denisson.backend.abstracter.useCases.DeleteAbstracterByIdUseCase;
import com.denisson.backend.establishment.adapters.repository.EstablishmentRepository;
import com.denisson.backend.establishment.entities.Establishment;

public class DeleteEstablishmentByIdUseCase extends DeleteAbstracterByIdUseCase<Establishment, EstablishmentRepository> {
    
    public DeleteEstablishmentByIdUseCase(EstablishmentRepository establishmentRepository) {
        super(establishmentRepository);
    }
}
