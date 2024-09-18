package com.denisson.backend.categories.adapters.DTO;

import com.denisson.backend.abstracter.adapters.DTO.DTOAbstracter;

public record CategoryDTO(
        String name,
        String image
) implements DTOAbstracter {
    @Override
    public String getName() {
        return name();
    }

}
