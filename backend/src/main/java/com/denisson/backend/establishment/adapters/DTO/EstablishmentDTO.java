package com.denisson.backend.establishment.adapters.DTO;

public record EstablishmentDTO(
        String name,
        String evaluation,
        String description,
        String price,
        String time,
        String tag_1,
        String tag_2,
        String tag_3,
        String image
) {
}
