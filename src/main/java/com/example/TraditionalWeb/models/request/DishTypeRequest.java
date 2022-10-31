package com.example.TraditionalWeb.models.request;

import com.example.TraditionalWeb.models.Dish;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DishTypeRequest {
    private String name;
    private String description;
    private String isDeleted;
}
