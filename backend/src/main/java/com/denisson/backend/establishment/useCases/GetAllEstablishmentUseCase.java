package com.denisson.backend.establishment.useCases;

import com.denisson.backend.abstracter.useCases.GetAllAbstracterUseCase;
import com.denisson.backend.establishment.adapters.repository.EstablishmentRepository;
import com.denisson.backend.establishment.entities.Establishment;

import java.util.List;

public class GetAllEstablishmentUseCase extends GetAllAbstracterUseCase<Establishment, EstablishmentRepository> {

    public GetAllEstablishmentUseCase(EstablishmentRepository establishmentRepository) {
        super(establishmentRepository);
    }
}
