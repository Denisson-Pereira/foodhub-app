package com.denisson.backend.product.adapters.DTO;

import com.denisson.backend.abstracter.adapters.DTO.DTOAbstracter;

public record ProductDTO(
        String name,
        String evaluation,
        String description,
        String price,
        String category,
        String establishment,
        String image
) implements DTOAbstracter {
    @Override
    public String getName() {
        return name();
    }
}
