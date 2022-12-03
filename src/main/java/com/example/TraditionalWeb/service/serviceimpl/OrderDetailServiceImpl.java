package com.example.TraditionalWeb.service.serviceimpl;

import com.example.TraditionalWeb.models.Cart;
import com.example.TraditionalWeb.models.OrderDetails;
import com.example.TraditionalWeb.models.Product;
import com.example.TraditionalWeb.models.request.OrderDetailRequest;
import com.example.TraditionalWeb.repository.CartRepository;
import com.example.TraditionalWeb.repository.OrderDetailRepository;
import com.example.TraditionalWeb.repository.ProductRepository;
import com.example.TraditionalWeb.service.OrderDetailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@Slf4j
public class OrderDetailServiceImpl implements OrderDetailService {
    @Autowired
    CartRepository cartRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    OrderDetailRepository orderDetailRepository;

    @Override
    public Set<OrderDetails> getOrderDetailsList(Long cartId) {
        Set<OrderDetails> orderDetailsSet = orderDetailRepository.getOrderDetailByCart(cartId);
        return orderDetailsSet;
    }

    @Override
    public OrderDetails addProductToOrderDetail(OrderDetailRequest orderDetailRequest) {
        Cart cart = cartRepository.findById(orderDetailRequest.getCartId()).get();
        Product product = productRepository.findById(orderDetailRequest.getProductId()).get();
        OrderDetails orderDetailsInDB = orderDetailRepository.findByProduct(orderDetailRequest.getProductId());
        if (orderDetailsInDB == null) {
            OrderDetails orderDetails = new OrderDetails();
            orderDetails.setCart(cart);
            orderDetails.setProduct(product);
            orderDetails.setAmount(1);
            orderDetails.setTotal(product.getCost());
            orderDetailRepository.save(orderDetails);
            return orderDetails;
        } else {
            orderDetailsInDB.setAmount(orderDetailsInDB.getAmount() + 1);
            orderDetailsInDB.setTotal(orderDetailsInDB.getTotal() + product.getCost());
            orderDetailRepository.save(orderDetailsInDB);
            return orderDetailsInDB;
        }
    }

    @Override
    public OrderDetails increaseAmount(Long id) {
        OrderDetails orderDetails = orderDetailRepository.findByIdAndIsDeleted(id, false);
        Product productInOD = orderDetails.getProduct();
        if (orderDetails != null) {
            orderDetails.setAmount(orderDetails.getAmount() + 1);
            orderDetails.setTotal(orderDetails.getTotal() + productInOD.getCost());
            orderDetailRepository.save(orderDetails);
            return orderDetails;
        } else {
            return null;
        }
    }

    @Override
    public OrderDetails decreaseAmount(Long id) {
        OrderDetails orderDetails = orderDetailRepository.findByIdAndIsDeleted(id, false);
        Product productInOD = orderDetails.getProduct();
        if (orderDetails != null) {
            orderDetails.setAmount(orderDetails.getAmount() - 1);
            orderDetails.setTotal(orderDetails.getTotal() - productInOD.getCost());
            orderDetailRepository.save(orderDetails);
            return orderDetails;
        } else {
            return null;
        }
    }

    @Override
    public OrderDetails deleteOrderDetails(Long id) {
        OrderDetails orderDetails = orderDetailRepository.findByIdAndIsDeleted(id, false);
        orderDetails.setDeleted(true);
        orderDetailRepository.save(orderDetails);
        orderDetailRepository.delete(orderDetails);
        return orderDetails;
    }

    @Override
    public String cleanOrderDetailsInCart(Long cartId) {
        Set<OrderDetails> orderDetailsSet = orderDetailRepository.getOrderDetailByCart(cartId);
        for (OrderDetails orderDetails : orderDetailsSet) {
            orderDetailRepository.delete(orderDetails);
        }
        return "Giỏ hàng trống";
    }
}
