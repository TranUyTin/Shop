package com.example.TraditionalWeb.controller;

import com.example.TraditionalWeb.dto.BrandDTO;
import com.example.TraditionalWeb.dto.ProductTypeDTO;
import com.example.TraditionalWeb.models.Brand;
import com.example.TraditionalWeb.models.ProductType;
import com.example.TraditionalWeb.models.request.BrandRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.request.ProductTypeRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.service.BrandService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/brand")
@Slf4j
public class BrandController {
    @Autowired
    private BrandService brandService;

    @GetMapping(value = "/list")
    public ResponseEntity<?> getListBrand(PagingRequest pagingRequest){
        PaginationResponse<BrandDTO> brandPaginationResponse = brandService.getListBrand(pagingRequest);
        return ResponseEntity.ok(brandPaginationResponse);
    }

    @GetMapping
    public ResponseEntity<?> getBrandDetail(@RequestParam(name = "id") Long id){
        try {
            BrandDTO brand = brandService.getBrandDetail(id);
            return ResponseEntity.ok(brand);
        } catch (RuntimeException e) {
            return ResponseEntity.ok(e.getMessage());
        }

    }

    @PostMapping()
    public ResponseEntity<?> createBrand(@RequestBody BrandRequest brandRequest){
        try{
            String brand = brandService.createBrand(brandRequest);
            return ResponseEntity.ok(brand);
        } catch (RuntimeException e) {
            return ResponseEntity.ok(e.getMessage());
        }

    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateBrand(@PathVariable Long id, @RequestBody BrandRequest brandRequest){
        try {
            String brand = brandService.updateBrand(id, brandRequest);
            return ResponseEntity.ok(brand);
        } catch (RuntimeException e) {
            return ResponseEntity.ok(e.getMessage());
        }

    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteBrand(@PathVariable Long id){
        try {
            String brand = brandService.deleteBrand(id);
            return ResponseEntity.ok(brand);
        } catch (RuntimeException e) {
            return ResponseEntity.ok(e.getMessage());
        }

    }
}
