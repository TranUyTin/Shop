package com.example.TraditionalWeb.service;

import com.example.TraditionalWeb.models.Bill;
import com.example.TraditionalWeb.models.request.BillRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;

public interface BillService {
    Bill createBill (BillRequest billRequest);
    Bill updateStatus (Long id, Boolean status);
    Bill updateStatusDelivery (Long id, Boolean status);

    Bill getBillDetail (Long id);
    Bill deletedBill (Long id);

    PaginationResponse<Bill> getListBill(PagingRequest pagingRequest);
}
