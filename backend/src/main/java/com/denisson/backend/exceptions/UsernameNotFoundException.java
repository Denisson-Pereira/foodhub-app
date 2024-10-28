package com.denisson.backend.exceptions;

public class UsernameNotFoundException extends RuntimeException{
    public UsernameNotFoundException(String login) {
        super(String.format("Username %s not found!", login));
    }
}
