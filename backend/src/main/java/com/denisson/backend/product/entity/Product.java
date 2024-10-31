package com.denisson.backend.product.entity;

import com.denisson.backend.abstracter.entitiy.AbstractEntity;

import jakarta.persistence.Entity;

@Entity
public class Product extends AbstractEntity {
    private String evaluation;
    private String description;
    private String price;
    private String category;
    private String establishment;
    private String image;

    public Product(Long id, String name, String evaluation, String description, String price, String category, String establishment,String image) {
        super(id, name);
        this.evaluation = evaluation;
        this.description = description;
        this.price = price;
        this.category = category;
        this.establishment = establishment;
        this.image = image;
    }

    public String getEvaluation() {
        return evaluation;
    }

    public void setEvaluation(String evaluation) {
        this.evaluation = evaluation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getEstablishment() {
        return establishment;
    }

    public void setEstablishment(String establishment) {
        this.establishment = establishment;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
