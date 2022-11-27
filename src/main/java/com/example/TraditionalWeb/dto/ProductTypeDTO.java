package com.example.TraditionalWeb.dto;

import com.example.TraditionalWeb.models.Brand;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class ProductTypeDTO {
    public String name;

    public String fullName;

    public String id;

    public Boolean isDeleted;

    public Set<Brand> brands;
}
