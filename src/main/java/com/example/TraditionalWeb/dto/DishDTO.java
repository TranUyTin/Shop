package com.example.TraditionalWeb.dto;

import com.example.TraditionalWeb.models.DishType;
import com.example.TraditionalWeb.models.Images;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class DishDTO {
    public Long id;
    public String name;
    public String description;
    public int price;
    public int amount;
    public Boolean isDeleted;
    public DishType dishType;
    public Set<Images> images;
}
