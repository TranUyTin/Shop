package com.example.TraditionalWeb.service;

import com.example.TraditionalWeb.dto.OrderDetailDTO;
import com.example.TraditionalWeb.models.OrderDetails;
import com.example.TraditionalWeb.models.request.OrderDetailRequest;

import java.util.*;

public interface OrderDetailService {
    Set<OrderDetailDTO> getOrderDetailsList(Long cartId);
    OrderDetails addProductToOrderDetail(OrderDetailRequest orderDetailRequest);

    OrderDetails increaseAmount(Long id);
    OrderDetails decreaseAmount(Long id);
    OrderDetails deleteOrderDetails(Long id);

    String cleanOrderDetailsInCart(Long cartId);
}
