package com.example.TraditionalWeb.service.serviceimpl;

import com.example.TraditionalWeb.exception.UserException;
import com.example.TraditionalWeb.models.Bill;
import com.example.TraditionalWeb.models.Cart;
import com.example.TraditionalWeb.models.OrderDetails;
import com.example.TraditionalWeb.models.User;
import com.example.TraditionalWeb.models.request.BillRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.repository.BillRepository;
import com.example.TraditionalWeb.repository.CartRepository;
import com.example.TraditionalWeb.repository.UserRepository;
import com.example.TraditionalWeb.service.BillService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
@Service
@Slf4j
public class BillServiceImpl implements BillService {

    @Autowired
    BillRepository billRepository;

    @Autowired
    CartRepository cartRepository;

    @Autowired
    UserRepository userRepository;
    @Override
    public Bill createBill(BillRequest billRequest) {
        Cart cart = cartRepository.findByIdAndIsDeleted(billRequest.getCartId(), false);
        Set<OrderDetails> orderDetailsSet = cart.getOrderDetails();
        User user = userRepository.findByUsername(billRequest.getUsername());
        Bill bill = new Bill();
        for (OrderDetails orderDetails : orderDetailsSet) {
            bill.setTotal(bill.getTotal() + orderDetails.getTotal());
        }
        bill.setCart(cart);
        bill.setUser(user);
        billRepository.save(bill);
        return bill;
    }

    @Override
    public Set<Bill> getBillByUser(Long userId) {
        Set<Bill> billSet = billRepository.findByUser(userId);
        return billSet;
    }

    @Override
    public Bill updateStatus(Long id, Boolean status) {
        Bill bill = billRepository.findByIdAndIsDeleted(id, false);
        if (bill == null){
            throw new UserException("400", "Hóa đơn không tồn tại!");
        }
        bill.setStatus(status);
        billRepository.save(bill);
        return bill;
    }

    @Override
    public Bill updateStatusDelivery(Long id, Boolean status) {
        return null;
    }

    @Override
    public Bill getBillDetail(Long id) {
        Bill bill = billRepository.findByIdAndIsDeleted(id, false);
        return bill;
    }

    @Override
    public Bill deletedBill(Long id) {
        Bill bill = billRepository.findByIdAndIsDeleted(id, false);
        if (bill == null) {
            throw new RuntimeException("Hóa đơn không tồn tại!");
        }
        bill.setIsDeleted(true);
        billRepository.save(bill);
        return bill;
    }

    @Override
    public PaginationResponse<Bill> getListBill(PagingRequest pagingRequest) {
        return null;
    }
}
