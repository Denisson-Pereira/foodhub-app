package com.denisson.backend.category.entity;

import com.denisson.backend.abstracter.entitiy.AbstractEntity;

import jakarta.persistence.Entity;

@Entity
public class Category extends AbstractEntity {

    private String image;

    public Category(Long id, String name,String image) {
        super(id, name);
        this.image = image;
    }

    public String getImage() {
        return image;
    }
}
