package com.example.TraditionalWeb.models.response;

import com.example.TraditionalWeb.models.Images;
import com.example.TraditionalWeb.models.ProductType;
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
public class ProductResponse {
    public Long id;
    public String name;
    public String description;
    public int price;
    public int amount;
    public ProductType dishType;
    public Images images;
}
