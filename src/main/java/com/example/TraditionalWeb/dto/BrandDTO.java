package com.example.TraditionalWeb.dto;

import com.example.TraditionalWeb.models.Product;
import com.example.TraditionalWeb.models.ProductType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class BrandDTO {

    private Long id;

    private String name;

    private String fullName;

    private Boolean isDeleted;

    private Set<ProductDTO> products = new HashSet<>();

    private ProductType productType;
}
