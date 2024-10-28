package com.denisson.backend.user.useCases;

import com.denisson.backend.exceptions.UsernameNotFoundException;
import com.denisson.backend.user.adapter.dtos.LoginDTO;
import com.denisson.backend.user.adapter.gateway.UserRepository;
import com.denisson.backend.user.entity.User;

public class LoginUseCase {
    private final UserRepository<User> repository;


    public LoginUseCase(UserRepository<User> repository) {
        this.repository = repository;
    }


    public User login(LoginDTO loginDTO) {
        User user = repository.findByLogin(loginDTO.login()).orElseThrow(() -> new UsernameNotFoundException(loginDTO.login()));

        if(user.getLogin().equals(loginDTO.login()) && user.getPassword().equals(loginDTO.password())) {
            return user;
        }

        throw new IllegalArgumentException("Invalid credentials!");
    }
}
