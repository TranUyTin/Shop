package com.example.TraditionalWeb.models.request;


import com.example.TraditionalWeb.models.Brand;
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
public class ProductRequest {
    @NotNull
    private String name;
    @NotNull
    private Long cost;
    @NotNull
    private Long quantity;
    private String specifications;

    private String brand;
    @NotNull
    private String productType;
    @NotNull
    private String images;
}
