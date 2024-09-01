package com.denisson.backend.establishment.adapters.controller;

import com.denisson.backend.establishment.entities.Establishment;
import com.denisson.backend.establishment.useCases.GetAllEstablishmentUseCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("establishments")
public class EstablishmentController {
    @Autowired
    GetAllEstablishmentUseCase getAllEstablishmentUseCase;

    @GetMapping()
    public ResponseEntity<List<Establishment>> getAllEstablishment() {
        return ResponseEntity.ok(getAllEstablishmentUseCase.execute());
    }

}
