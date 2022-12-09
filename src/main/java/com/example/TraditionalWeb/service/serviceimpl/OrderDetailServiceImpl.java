package com.example.TraditionalWeb.service.serviceimpl;

import com.example.TraditionalWeb.dto.OrderDetailDTO;
import com.example.TraditionalWeb.dto.ProductDTO;
import com.example.TraditionalWeb.models.Cart;
import com.example.TraditionalWeb.models.OrderDetails;
import com.example.TraditionalWeb.models.Product;
import com.example.TraditionalWeb.models.request.OrderDetailRequest;
import com.example.TraditionalWeb.repository.CartRepository;
import com.example.TraditionalWeb.repository.OrderDetailRepository;
import com.example.TraditionalWeb.repository.ProductRepository;
import com.example.TraditionalWeb.service.OrderDetailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
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
    public Set<OrderDetailDTO> getOrderDetailsList(Long cartId) {
        Set<OrderDetails> orderDetailsSet = orderDetailRepository.findByCartId(cartId);
        Set<OrderDetailDTO> orderDetailDTOSet = new HashSet<>();
        for(OrderDetails orderDetails: orderDetailsSet) {
            if (!orderDetails.isDeleted()) {
                ProductDTO productDTO = new ProductDTO();
                BeanUtils.copyProperties(orderDetails.getProduct(), productDTO);
                OrderDetailDTO orderDetailDTO = new OrderDetailDTO();
                orderDetailDTO.setProduct(productDTO);
                BeanUtils.copyProperties(orderDetails, orderDetailDTO);
                orderDetailDTOSet.add(orderDetailDTO);
            }

        }

        return orderDetailDTOSet;
    }

    @Override
    public OrderDetails addProductToOrderDetail(OrderDetailRequest orderDetailRequest) {
        Cart cart = cartRepository.findById(orderDetailRequest.getCartId()).get();
        Product product = productRepository.findByProductId(orderDetailRequest.getProductId());
        OrderDetails orderDetailsInDB = orderDetailRepository.findByProduct(orderDetailRequest.getProductId(), orderDetailRequest.getCartId());
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
        return orderDetails;
    }

    @Override
    public String cleanOrderDetailsInCart(Long cartId) {
        Set<OrderDetails> orderDetailsSet = orderDetailRepository.findByCartId(cartId);
        for (OrderDetails orderDetails : orderDetailsSet) {
            orderDetails.setDeleted(true);
            orderDetailRepository.save(orderDetails);
        }
        return "Giỏ hàng trống";
    }
}
