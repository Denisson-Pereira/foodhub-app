package com.denisson.backend.establishment.useCases;

import com.denisson.backend.abstracter.entities.GeneralException;
import com.denisson.backend.abstracter.useCases.UpdateAbstracterByIdUseCase;
import com.denisson.backend.establishment.adapters.DTO.EstablishmentDTO;
import com.denisson.backend.establishment.adapters.repository.EstablishmentRepository;
import com.denisson.backend.establishment.entities.Establishment;

import java.util.Optional;

public class UpdateEstablishmentByIdUseCase extends UpdateAbstracterByIdUseCase<Establishment, EstablishmentDTO, EstablishmentRepository> {

    public UpdateEstablishmentByIdUseCase(EstablishmentRepository establishmentRepository) {
        super(establishmentRepository);
    }

    @Override
    protected void updateFields(Establishment establishment, EstablishmentDTO establishmentDTO) {
        establishment.setName(establishmentDTO.name());
        establishment.setEvaluation(establishmentDTO.evaluation());
        establishment.setDescription(establishmentDTO.description());
        establishment.setPrice(establishmentDTO.price());
        establishment.setTime(establishmentDTO.time());
        establishment.setTag_1(establishmentDTO.tag_1());
        establishment.setTag_2(establishmentDTO.tag_2());
        establishment.setTag_3(establishmentDTO.tag_3());
        establishment.setImage(establishmentDTO.image());
    }
}
