package com.denisson.backend.users.adapters.controllers;

import com.denisson.backend.abstracter.useCases.GeneralException;
import com.denisson.backend.users.adapters.DTO.LoginDTO;
import com.denisson.backend.users.entities.User;
import com.denisson.backend.users.useCases.LoginUserCase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("login")
public class LoginController {

    @Autowired
    LoginUserCase loginUserCase;

    @PostMapping
    public ResponseEntity<Object> login(@RequestBody LoginDTO loginDTO) {
        try {
            User user = loginUserCase.execute(loginDTO);
            return ResponseEntity.ok(user);
        } catch (GeneralException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
