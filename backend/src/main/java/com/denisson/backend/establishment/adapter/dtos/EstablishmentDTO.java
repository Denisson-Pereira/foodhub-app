package com.denisson.backend.establishment.adapter.dtos;

import com.denisson.backend.abstracter.adapter.interfaces.AbstractDTOInterface;

public record EstablishmentDTO(

    String evaluation,
    String description,
    String price,
    String time,
    String tag_1,
    String tag_2,
    String tag_3,
    String cover

) implements AbstractDTOInterface {

    @Override
    public String getName() {
        return "Establishment";
    }}
