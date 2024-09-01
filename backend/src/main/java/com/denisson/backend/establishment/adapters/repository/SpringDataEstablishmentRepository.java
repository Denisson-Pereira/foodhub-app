package com.denisson.backend.establishment.adapters.repository;

import com.denisson.backend.establishment.entities.Establishment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SpringDataEstablishmentRepository extends JpaRepository<Establishment, Long> {
    boolean existsByName(String name);
    Optional<Establishment> findByName(String name);
}
