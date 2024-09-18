package com.denisson.backend.establishment.entities;

import com.denisson.backend.abstracter.entities.EntityAbstract;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Establishment extends EntityAbstract {

    private String evaluation;
    private String description;
    private String price;
    private String time;
    private String tag_1;
    private String tag_2;
    private String tag_3;
    private String image;

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

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getTag_1() {
        return tag_1;
    }

    public void setTag_1(String tag_1) {
        this.tag_1 = tag_1;
    }

    public String getTag_2() {
        return tag_2;
    }

    public void setTag_2(String tag_2) {
        this.tag_2 = tag_2;
    }

    public String getTag_3() {
        return tag_3;
    }

    public void setTag_3(String tag_3) {
        this.tag_3 = tag_3;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
