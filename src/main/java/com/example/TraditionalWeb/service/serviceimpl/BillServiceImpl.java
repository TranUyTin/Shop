package com.example.TraditionalWeb.service.serviceimpl;

import com.example.TraditionalWeb.dto.BillDTO;
import com.example.TraditionalWeb.dto.OrderDetailDTO;
import com.example.TraditionalWeb.dto.ProductDTO;
import com.example.TraditionalWeb.exception.UserException;
import com.example.TraditionalWeb.models.*;
import com.example.TraditionalWeb.models.request.BillRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.repository.*;
import com.example.TraditionalWeb.service.BillService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
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

    @Autowired
    ProductRepository productRepository;

    @Autowired
    OrderDetailRepository orderDetailRepository;
    @Override
    public Bill createBill(BillRequest billRequest) {
        Cart cart = cartRepository.findByCartId(billRequest.getCartId());
//        Cart cart = new Cart();
        Set<OrderDetails> orderDetailsSet = orderDetailRepository.findByCartIdAndIsDeleted(cart.getId(), false);
        User user = userRepository.findByUsername(billRequest.getUsername());
        Bill bill = new Bill();
        bill.setTotal(0L);
        for (OrderDetails orderDetails : orderDetailsSet) {
            bill.setTotal(bill.getTotal() + orderDetails.getTotal());
        }
        bill.setCart(cart);
        bill.setUser(user);
        bill.setIsDeleted(false);
        billRepository.save(bill);
        for (OrderDetails orderDetails : orderDetailsSet) {
            orderDetails.setBill(bill);
            orderDetailRepository.save(orderDetails);
            Product product = productRepository.findByIdAndIsDeleted(orderDetails.getProduct().getId(), "False");
            product.setQuantity(product.getQuantity()-orderDetails.getAmount());
            productRepository.save(product);
        }

        return bill;
    }

    @Override
    public Set<Bill> getBillByUser(Long userId) {
        Set<Bill> billSet = billRepository.findByUser(userId);
        return billSet;
    }

    @Override
    public Set<Total> count() throws ParseException {
        Set<Total> set = new HashSet<>();
        Date startDate = new Date();
        Date endDate = new Date();
        for(int i=1; i <=12; i++){
            Long total = 0L;
            if (i < 10){
                startDate = new SimpleDateFormat("yyyy-MM-dd").parse("2022-0"+i+"-01");
                endDate = new SimpleDateFormat("yyyy-MM-dd").parse("2022-0"+i+"-30");
            }
            else {
                startDate = new SimpleDateFormat("yyyy-MM-dd").parse("2022-"+i+"-01");
                endDate = new SimpleDateFormat("yyyy-MM-dd").parse("2022-"+i+"-30");
            }

            Set<Bill> billSet = billRepository.findAllByCreatedAtLessThanEqualAndCreatedAtGreaterThanEqual(endDate, startDate);

            for(Bill bill: billSet) {
                total = total + bill.getTotal();
            }
            Total total1 = new Total(i,total);

            set.add(total1);

        }
        return set;
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
    public BillDTO getBillDetail(Long id) {
        Bill bill = billRepository.findByIdAndIsDeleted(id, false);
        Set<OrderDetailDTO> orderDetailsSet = new HashSet<>();
        Set<OrderDetails> orderDetails = orderDetailRepository.findByBillId(id);
        orderDetails.forEach(item -> {

                OrderDetailDTO orderDetail = new OrderDetailDTO();
                BeanUtils.copyProperties(item, orderDetail);
                ProductDTO productDTO = new ProductDTO();
                BeanUtils.copyProperties(item.getProduct(), productDTO);
                orderDetail.setProduct(productDTO);
                orderDetailsSet.add(orderDetail);
        });
        BillDTO billDTO = new BillDTO();
        BeanUtils.copyProperties(bill, billDTO);
        billDTO.setOrderDetails(orderDetailsSet);
        return billDTO;
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
