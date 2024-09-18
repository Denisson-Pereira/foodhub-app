package com.denisson.backend.establishment.useCases;

import com.denisson.backend.abstracter.entities.GeneralException;
import com.denisson.backend.establishment.adapters.DTO.EstablishmentDTO;
import com.denisson.backend.establishment.adapters.repository.EstablishmentRepository;
import com.denisson.backend.establishment.entities.Establishment;

import java.util.Optional;

public class UpdateEstablishmentByIdUseCase {
    private final EstablishmentRepository establishmentRepository;

    public UpdateEstablishmentByIdUseCase(EstablishmentRepository establishmentRepository) {
        this.establishmentRepository = establishmentRepository;
    }

    public Establishment execute(Long id, EstablishmentDTO establishmentDTO) {
        Optional<Establishment> optionalEstablishment = establishmentRepository.findById(id);
        Establishment establishment = optionalEstablishment
                .orElseThrow(() -> new GeneralException("Establishment not found for id = " + id));
        Optional<Establishment> establishmentWithName = establishmentRepository.findByName(establishmentDTO.name());

        if (establishmentWithName.isPresent() && !establishmentWithName.get().getId().equals(id)) {
            throw new GeneralException(String.format("Name %s already exists!", establishmentDTO.name()));
        }

        establishment.setName(establishmentDTO.name());
        establishment.setEvaluation(establishmentDTO.evaluation());
        establishment.setDescription(establishmentDTO.description());
        establishment.setPrice(establishmentDTO.price());
        establishment.setTime(establishmentDTO.time());
        establishment.setTag_1(establishmentDTO.tag_1());
        establishment.setTag_2(establishmentDTO.tag_2());
        establishment.setTag_3(establishmentDTO.tag_3());
        establishment.setImage(establishmentDTO.image());

        return establishmentRepository.save(establishment);
    }
}
