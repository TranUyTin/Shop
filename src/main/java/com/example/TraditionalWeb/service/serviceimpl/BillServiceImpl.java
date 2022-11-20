package com.example.TraditionalWeb.service.serviceimpl;

import com.example.TraditionalWeb.exception.UserException;
import com.example.TraditionalWeb.models.Bill;
import com.example.TraditionalWeb.models.request.BillRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.repository.BillRepository;
import com.example.TraditionalWeb.service.BillService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class BillServiceImpl implements BillService {

    @Autowired
    BillRepository billRepository;
    @Override
    public Bill createBill(BillRequest billRequest) {
        return null;
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
        return null;
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
