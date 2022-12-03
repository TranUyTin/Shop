package com.example.TraditionalWeb.controller;

import com.example.TraditionalWeb.models.OrderDetails;
import com.example.TraditionalWeb.models.request.OrderDetailRequest;
import com.example.TraditionalWeb.service.OrderDetailService;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
@Controller
@RequestMapping(value = "/order-details")
@Slf4j
public class OrderDetailsController {
    @Autowired
    private OrderDetailService orderDetailService;

    @GetMapping(value = "/list/{id}")
    public ResponseEntity<?> getListByCart(@PathVariable Long id) {
        Set<OrderDetails> orderDetailsSet = orderDetailService.getOrderDetailsList(id);
        return ResponseEntity.ok(orderDetailsSet);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<?> addProductToOrderDetails(@RequestBody OrderDetailRequest orderDetailRequest) {
        OrderDetails orderDetails = orderDetailService.addProductToOrderDetail(orderDetailRequest);
        return ResponseEntity.ok("Đã thêm sản phẩm vào giỏ hàng!");
    }

    @PutMapping(value = "/increase/{id}")
    public ResponseEntity<?> increaseAmount(@PathVariable Long id) {
        OrderDetails orderDetails = orderDetailService.increaseAmount(id);
        return ResponseEntity.ok(orderDetails);
    }

    @PutMapping(value = "/decrease/{id}")
    public ResponseEntity<?> decreaseAmount(@PathVariable Long id) {
        OrderDetails orderDetails = orderDetailService.decreaseAmount(id);
        return ResponseEntity.ok(orderDetails);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> deleteOrderDetails(@PathVariable Long id) {
        OrderDetails orderDetails = orderDetailService.deleteOrderDetails(id);
        return ResponseEntity.ok("Đã xóa sản phẩm từ giỏ hàng!");
    }

    @DeleteMapping(value = "/clean-cart/{cartId}")
    public ResponseEntity<?> cleanOrderDetailsInCart(@PathVariable Long cartId) {
        String cleanOD = orderDetailService.cleanOrderDetailsInCart(cartId);
        return ResponseEntity.ok(cleanOD);
    }
}
