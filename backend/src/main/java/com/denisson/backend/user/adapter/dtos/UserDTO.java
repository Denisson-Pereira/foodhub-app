package com.denisson.backend.user.adapter.dtos;

public record UserDTO(
    String name,
    String login,
    String password
) {}
