package com.denisson.backend.establishment.adapters.controller;

import com.denisson.backend.establishment.entities.Establishment;
import com.denisson.backend.establishment.entities.GeneralException;
import com.denisson.backend.establishment.useCases.CreateEstablishmentUseCase;
import com.denisson.backend.establishment.useCases.GetAllEstablishmentUseCase;
import com.denisson.backend.establishment.useCases.GetEstablishmentByIdUseCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("establishments")
public class EstablishmentController {
    @Autowired
    CreateEstablishmentUseCase createEstablishmentUseCase;
    @Autowired
    GetAllEstablishmentUseCase getAllEstablishmentUseCase;
    @Autowired
    GetEstablishmentByIdUseCase getEstablishmentByIdUseCase;

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

    @GetMapping("/{id}")
    public ResponseEntity<Object> getEstablishmentById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(getEstablishmentByIdUseCase.execute(id));
        } catch (GeneralException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

}
