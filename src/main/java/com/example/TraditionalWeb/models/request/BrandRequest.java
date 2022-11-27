package com.example.TraditionalWeb.models.request;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class BrandRequest {

    public Long id;

    public String name;

    public String fullName;

    public String productType;

}
