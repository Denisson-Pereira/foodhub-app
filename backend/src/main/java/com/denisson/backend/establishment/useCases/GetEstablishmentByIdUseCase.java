package com.denisson.backend.establishment.useCases;

import com.denisson.backend.abstracter.entities.GeneralException;
import com.denisson.backend.abstracter.useCases.GetAbstracterByIdUseCase;
import com.denisson.backend.establishment.adapters.repository.EstablishmentRepository;
import com.denisson.backend.establishment.entities.Establishment;

import java.util.Optional;

public class GetEstablishmentByIdUseCase extends GetAbstracterByIdUseCase<Establishment, EstablishmentRepository> {

    public GetEstablishmentByIdUseCase(EstablishmentRepository establishmentRepository) {
        super(establishmentRepository);
    }
}
