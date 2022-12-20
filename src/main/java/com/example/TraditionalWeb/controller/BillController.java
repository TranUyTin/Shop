package com.example.TraditionalWeb.controller;

import com.example.TraditionalWeb.dto.BillDTO;
import com.example.TraditionalWeb.models.Bill;
import com.example.TraditionalWeb.models.request.BillRequest;
import com.example.TraditionalWeb.service.BillService;
import com.example.TraditionalWeb.models.Total;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Set;
@Controller
@RequestMapping(value = "/bill")
@Slf4j
public class BillController {
    @Autowired
    private BillService billService;

    @GetMapping(value = "/getList/{userId}")
    public ResponseEntity<?> getListByUser(@PathVariable Long userId) {
        Set<Bill> billSet = billService.getBillByUser(userId);
        return ResponseEntity.ok(billSet);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<?> createBill(@RequestBody BillRequest billRequest){
        Bill bill = billService.createBill(billRequest);
        return ResponseEntity.ok(bill);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getBillById(@PathVariable Long id) {
        BillDTO bill = billService.getBillDetail(id);
        return ResponseEntity.ok(bill);
    }

    @GetMapping(value = "/total")
    public ResponseEntity<?> getTotal() throws ParseException {
        Set<Total> bill = billService.count();
        return ResponseEntity.ok(bill);
    }
}
