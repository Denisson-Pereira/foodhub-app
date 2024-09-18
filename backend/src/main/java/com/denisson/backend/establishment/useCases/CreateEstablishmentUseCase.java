package com.denisson.backend.establishment.useCases;

import com.denisson.backend.abstracter.adapters.repository.RepositoryAbstracter;
import com.denisson.backend.abstracter.entities.GeneralException;
import com.denisson.backend.abstracter.useCases.CreateAbstracterUseCase;
import com.denisson.backend.establishment.adapters.repository.EstablishmentRepository;
import com.denisson.backend.establishment.entities.Establishment;

public class CreateEstablishmentUseCase extends CreateAbstracterUseCase<Establishment, EstablishmentRepository> {

    public CreateEstablishmentUseCase(EstablishmentRepository establishmentRepository) {
        super(establishmentRepository);
    }

}
