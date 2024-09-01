package com.denisson.backend.establishment.adapters.repository;

import com.denisson.backend.establishment.entities.Establishment;

import java.util.List;

public interface EstablishmentRepository {

    List<Establishment> findAll();
}
