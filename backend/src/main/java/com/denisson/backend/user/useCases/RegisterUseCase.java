package com.denisson.backend.user.useCases;

import com.denisson.backend.user.adapter.gateway.UserRepository;
import com.denisson.backend.user.entity.User;

public class RegisterUseCase {
    private final UserRepository<User> repository;

    public RegisterUseCase(UserRepository<User> repository) {
        this.repository = repository;
    }

    public User register(User user) {
        if(repository.existsLogin(user.getLogin())) {
            throw new IllegalArgumentException("User already exists!");
        }
        
        repository.save(user);
        return user;
    }
}
