package com.denisson.backend.categories.entities;

import com.denisson.backend.abstracter.entities.EntityAbstract;
import jakarta.persistence.Entity;

@Entity
public class Category extends EntityAbstract {

    private String image;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
