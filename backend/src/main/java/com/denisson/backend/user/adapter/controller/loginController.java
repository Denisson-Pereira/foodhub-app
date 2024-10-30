package com.denisson.backend.user.adapter.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denisson.backend.user.adapter.dtos.LoginDTO;
import com.denisson.backend.user.entity.User;
import com.denisson.backend.user.useCases.LoginUseCase;
import com.denisson.backend.user.useCases.RegisterUseCase;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/auth")
public class loginController {
    private final LoginUseCase loginUseCase;
    private final RegisterUseCase registerUseCase;

    public loginController(LoginUseCase loginUseCase, RegisterUseCase registerUseCase) {
        this.loginUseCase = loginUseCase;
        this.registerUseCase = registerUseCase;
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody LoginDTO loginDTO) {
        try {
            return ResponseEntity.ok(loginUseCase.login(loginDTO));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody User user) {
        try {
            return ResponseEntity.ok(registerUseCase.register(user));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    
}

