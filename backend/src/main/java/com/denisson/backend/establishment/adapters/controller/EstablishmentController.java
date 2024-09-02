package com.denisson.backend.establishment.adapters.controller;

import com.denisson.backend.establishment.entities.Establishment;
import com.denisson.backend.establishment.entities.GeneralException;
import com.denisson.backend.establishment.useCases.CreateEstablishmentUseCase;
import com.denisson.backend.establishment.useCases.GetAllEstablishmentUseCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("establishments")
public class EstablishmentController {
    @Autowired
    CreateEstablishmentUseCase createEstablishmentUseCase;
    @Autowired
    GetAllEstablishmentUseCase getAllEstablishmentUseCase;

    @PostMapping()
    public ResponseEntity<Object> createEstablishment(@RequestBody Establishment establishment) {
        try {
            return ResponseEntity.ok(createEstablishmentUseCase.execute(establishment));
        } catch (GeneralException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping()
    public ResponseEntity<List<Establishment>> getAllEstablishment() {
        return ResponseEntity.ok(getAllEstablishmentUseCase.execute());
    }

}
