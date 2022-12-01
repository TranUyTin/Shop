package com.example.TraditionalWeb.service;

import com.example.TraditionalWeb.models.OrderDetails;
import com.example.TraditionalWeb.models.request.OrderDetailRequest;

import java.util.*;

public interface OrderDetailService {
    Set<OrderDetails> getOrderDetailsList(Long cartId);
    OrderDetails addProductToOrderDetail(OrderDetailRequest orderDetailRequest);

    OrderDetails increaseAmount(Long id);
    OrderDetails decreaseAmount(Long id);
    OrderDetails deleteOrderDetails(Long id);
}
