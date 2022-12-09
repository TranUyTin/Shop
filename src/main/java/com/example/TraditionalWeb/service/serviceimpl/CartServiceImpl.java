package com.example.TraditionalWeb.service.serviceimpl;

import com.example.TraditionalWeb.dto.CartDTO;
import com.example.TraditionalWeb.dto.ProductDTO;
import com.example.TraditionalWeb.models.Cart;
import com.example.TraditionalWeb.models.OrderDetails;
import com.example.TraditionalWeb.repository.CartRepository;
import com.example.TraditionalWeb.repository.OrderDetailRepository;
import com.example.TraditionalWeb.service.CartService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    CartRepository cartRepository;

    @Autowired
    OrderDetailRepository orderDetailRepository;

    @Override
    public CartDTO getCartDetail(Long userId) {
        Cart cart = cartRepository.findByUserId(userId);
        CartDTO cartDTO = new CartDTO();
        BeanUtils.copyProperties(cart, cartDTO);
        return cartDTO;
    }
}
