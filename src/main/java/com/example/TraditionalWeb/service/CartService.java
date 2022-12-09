package com.example.TraditionalWeb.service;

import com.example.TraditionalWeb.dto.CartDTO;
import com.example.TraditionalWeb.models.Cart;

import java.util.Optional;

public interface CartService {
    CartDTO getCartDetail(Long userId);
}
