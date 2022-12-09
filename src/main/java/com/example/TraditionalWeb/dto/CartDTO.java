package com.example.TraditionalWeb.dto;

import com.example.TraditionalWeb.models.OrderDetails;
import com.example.TraditionalWeb.models.User;
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
public class CartDTO {
    public Long id;
    public User user;
}
