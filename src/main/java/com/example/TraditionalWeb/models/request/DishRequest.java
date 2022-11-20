package com.example.TraditionalWeb.models.request;

import com.example.TraditionalWeb.models.DishType;
import com.example.TraditionalWeb.models.Images;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.Set;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DishRequest {
    @NotNull
    private String name;

    private String description;
    @NotNull
    private int price;
    @NotNull
    private int amount;

    private Boolean isDeleted;
    @NotNull
    private String dishType;
    @NotNull
    private String images;
}
