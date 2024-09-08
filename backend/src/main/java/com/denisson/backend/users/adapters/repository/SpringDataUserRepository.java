package com.denisson.backend.users.adapters.repository;

import com.denisson.backend.users.entities.User;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;

import java.util.Optional;

public interface SpringDataUserRepository extends JpaRepositoryImplementation<User, Long> {

    boolean existsByLogin(String login);
    Optional<User> findByLogin(String login);

}
