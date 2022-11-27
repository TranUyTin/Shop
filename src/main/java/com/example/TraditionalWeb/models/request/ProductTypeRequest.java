package com.example.TraditionalWeb.models.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ProductTypeRequest {
    private Long id;
    private String name;
    private String fullName;
}
