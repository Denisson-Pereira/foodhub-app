package com.denisson.backend.establishment.adapters.DTO;

import com.denisson.backend.abstracter.adapters.DTO.DTOAbstracter;
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Data Transfer Object (DTO) for representing an establishment")
public record EstablishmentDTO(
        @Schema(description = "The name of the establishment", example = "Awesome Cafe")
        String name,

        @Schema(description = "The evaluation or rating of the establishment", example = "4.5")
        String evaluation,

        @Schema(description = "A description of the establishment", example = "A cozy cafe with excellent coffee.")
        String description,

        @Schema(description = "The price range or cost associated with the establishment", example = "$$ - $$$")
        String price,

        @Schema(description = "The operating hours of the establishment", example = "8 AM - 8 PM")
        String time,

        @Schema(description = "A primary tag or category for the establishment", example = "Cafe")
        String tag_1,

        @Schema(description = "A secondary tag or category for the establishment", example = "Bakery")
        String tag_2,

        @Schema(description = "A tertiary tag or category for the establishment", example = "Pet-friendly")
        String tag_3,

        @Schema(description = "The URL or path to an image of the establishment", example = "http://example.com/image.jpg")
        String image
) implements DTOAbstracter {
        @Override
        public String getName() {
                return name();
        }
}
