package com.example.TraditionalWeb.dto;

import com.example.TraditionalWeb.models.Brand;
import com.example.TraditionalWeb.models.Images;
import com.example.TraditionalWeb.models.ProductType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class ProductDTO {
    public Long id;
    public String name;
    public Long cost;
    public Long quantity;
    public String isDeleted;
    public String specifications;
//    public ProductType productType;
//    public Brand brands;
    public Set<Images> images;
}
