package com.example.TraditionalWeb.controller;

import com.example.TraditionalWeb.dto.CartDTO;
import com.example.TraditionalWeb.models.Bill;
import com.example.TraditionalWeb.models.Cart;
import com.example.TraditionalWeb.service.CartService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Controller
@RequestMapping(value = "/cart")
@Slf4j
public class CartController {
    @Autowired
    CartService cartService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getCartByUserId(@PathVariable Long id) {
        CartDTO cart = cartService.getCartDetail(id);
        return ResponseEntity.ok(cart);
    }

}
