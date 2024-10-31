package com.denisson.backend.establishment.adapter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denisson.backend.abstracter.adapter.controller.AbstractController;
import com.denisson.backend.establishment.adapter.dtos.EstablishmentDTO;
import com.denisson.backend.establishment.entity.Establishment;
import com.denisson.backend.establishment.useCases.GetAllEstablishmentUseCase;
import com.denisson.backend.establishment.useCases.GetByIdEstablishmentUseCase;

@RestController
@RequestMapping("establishments")
public class EstablishmentController extends AbstractController<Establishment, Long, EstablishmentDTO>{

    @Autowired
    GetAllEstablishmentUseCase getAllEstablishmentUseCase;
    @Autowired
    GetByIdEstablishmentUseCase getByIdEstablishmentUseCase;

    @Override
    protected Object executeCreateUseCase(Establishment entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'executeCreateUseCase'");
    }

    @Override
    protected List<Establishment> executeGetAllUseCase() {
        return getAllEstablishmentUseCase.getAll();
    }

    @Override
    protected Object executeGetByIdUseCase(Long id) {
        return getByIdEstablishmentUseCase.getById(id);
    }

    @Override
    protected Object executeUpdateByIdUseCase(Long id, EstablishmentDTO dto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'executeUpdateByIdUseCase'");
    }

    @Override
    protected String executeDeleteByIdUseCase(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'executeDeleteByIdUseCase'");
    }
    
}
