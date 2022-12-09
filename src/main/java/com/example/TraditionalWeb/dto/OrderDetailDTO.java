package com.example.TraditionalWeb.dto;

import com.example.TraditionalWeb.models.Bill;
import com.example.TraditionalWeb.models.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OrderDetailDTO {
    public Long id;
    public ProductDTO product;
    public int amount;
    public boolean isDeleted;
    public Long total;
}
