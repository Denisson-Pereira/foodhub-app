package com.denisson.backend.category.adapter.dtos;

import com.denisson.backend.abstracter.adapter.interfaces.AbstractDTOInterface;

public record CategoryDTO(
    String image
) implements AbstractDTOInterface {

    @Override
    public String getName() {
        return "Category";
    }
}