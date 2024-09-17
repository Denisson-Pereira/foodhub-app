package com.denisson.backend.product.adapters.DTO;

public record ProductDTO(
        String name,
        String evaluation,
        String description,
        String price,
        String category,
        String establishment,
        String image
) {
}
