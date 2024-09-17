package com.denisson.backend.establishment.adapters.controller;

import com.denisson.backend.abstracter.adapters.controller.ControllerAbstracter;
import com.denisson.backend.establishment.adapters.DTO.EstablishmentDTO;
import com.denisson.backend.establishment.entities.Establishment;
import com.denisson.backend.establishment.useCases.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("establishments")
public class EstablishmentControllerAbstracter extends ControllerAbstracter<Establishment, Long, EstablishmentDTO> {

    @Autowired
    CreateEstablishmentUseCase createEstablishmentUseCase;
    @Autowired
    GetAllEstablishmentUseCase getAllEstablishmentUseCase;
    @Autowired
    GetEstablishmentByIdUseCase getEstablishmentByIdUseCase;
    @Autowired
    UpdateEstablishmentByIdUseCase updateEstablishmentByIdUseCase;
    @Autowired
    DeleteEstablishmentByIdUseCase deleteEstablishmentByIdUseCase;

    @Override
    protected Object createUseCase(Establishment establishment) {
        return createEstablishmentUseCase.execute(establishment);
    }

    @Override
    protected List<Establishment> getAllUseCase() {
        return getAllEstablishmentUseCase.execute();
    }

    @Override
    protected Object getByIdUseCase(Long id) {
        return getEstablishmentByIdUseCase.execute(id);
    }

    @Override
    protected Object updateByIdUseCase(Long id, EstablishmentDTO establishmentDTO) {
        return updateEstablishmentByIdUseCase.execute(id, establishmentDTO);
    }

    @Override
    protected String deleteByIdUseCase(Long id) {
        return deleteEstablishmentByIdUseCase.execute(id);
    }
}
