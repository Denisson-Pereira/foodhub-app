package com.denisson.backend.user.adapter.gateway;

import java.util.Optional;

public interface UserRepository<T> {
    T save(T value);
    boolean existsById(Long id);
    boolean existsLogin(String login);
    Optional<T> findByLogin(String name);
}
