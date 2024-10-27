package com.denisson.backend.exceptions;

public class IdNotFoundException extends RuntimeException {
    public IdNotFoundException(String entity, Long id) {
        super(String.format("%s with id %s not found", entity, id));
    }
}
