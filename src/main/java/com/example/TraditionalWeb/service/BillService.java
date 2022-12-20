package com.example.TraditionalWeb.service;

import com.example.TraditionalWeb.dto.BillDTO;
import com.example.TraditionalWeb.models.Bill;
import com.example.TraditionalWeb.models.request.BillRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.models.Total;

import java.text.ParseException;
import java.util.*;
public interface BillService {
    Bill createBill (BillRequest billRequest);
    Bill updateStatus (Long id, Boolean status);
    Bill updateStatusDelivery (Long id, Boolean status);

    BillDTO getBillDetail (Long id);
    Bill deletedBill (Long id);

    PaginationResponse<Bill> getListBill(PagingRequest pagingRequest);
    Set<Bill> getBillByUser(Long userId);

    Set<Total> count() throws ParseException;
}
