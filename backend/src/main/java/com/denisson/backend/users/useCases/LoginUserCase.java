package com.denisson.backend.users.useCases;

import com.denisson.backend.abstracter.entities.GeneralException;
import com.denisson.backend.users.adapters.DTO.LoginDTO;
import com.denisson.backend.users.adapters.repository.UserRepository;
import com.denisson.backend.users.entities.User;

import java.util.Objects;
import java.util.Optional;

public class LoginUserCase {
    private final UserRepository userRepository;

    public LoginUserCase(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User execute(LoginDTO loginDTO) {
        if (!userRepository.existsByLogin(loginDTO.login())) {
            throw new GeneralException("Login not found!");
        }

        Optional<User> userWithLogin = userRepository.findByLogin(loginDTO.login());

        if (userWithLogin.isPresent() && Objects.equals(userWithLogin.get().getPassword(), loginDTO.password())) {
            return userWithLogin.get();
        } else {
            throw new GeneralException("Invalid credentials!");
        }
    }
}
