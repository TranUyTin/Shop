package com.example.TraditionalWeb.models.response;

import com.example.TraditionalWeb.models.DishType;
import com.example.TraditionalWeb.models.Images;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class DishResponse {
    public Long id;
    public String name;
    public String description;
    public int price;
    public int amount;
    public DishType dishType;
    public Images images;
}
