package com.denisson.backend.users.adapters.repository;

import com.denisson.backend.users.entities.User;

import java.util.Optional;

public interface UserRepository {

    boolean existsByLogin(String login);
    Optional<User> findByLogin(String login);

}
