package com.example.TraditionalWeb.controller;

import com.example.TraditionalWeb.models.Bill;
import com.example.TraditionalWeb.models.request.BillRequest;
import com.example.TraditionalWeb.service.BillService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
@Controller
@RequestMapping(value = "/bill")
@Slf4j
public class BillController {
    @Autowired
    private BillService billService;

    @GetMapping(value = "/{userId}")
    public ResponseEntity<?> getListByUser(@PathVariable Long userId) {
        Set<Bill> billSet = billService.getBillByUser(userId);
        return ResponseEntity.ok(billSet);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<?> createBill(@RequestBody BillRequest billRequest) {
        Bill bill = billService.createBill(billRequest);
        return ResponseEntity.ok(bill);
    }
}
