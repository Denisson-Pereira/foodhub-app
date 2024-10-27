package com.denisson.backend.product.adapter.dtos;

import com.denisson.backend.abstracter.adapter.interfaces.AbstractDTOInterface;

public record ProductDTO(
    String name,
    String evaluation,
    String description,
    String price,
    String category,
    String establishment,
    String image
) implements AbstractDTOInterface {

    @Override
    public String getName() {
        return "Product";
    }
}
