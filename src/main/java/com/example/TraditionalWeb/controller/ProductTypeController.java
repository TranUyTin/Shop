package com.example.TraditionalWeb.controller;

import com.example.TraditionalWeb.dto.ProductTypeDTO;
import com.example.TraditionalWeb.models.ProductType;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.request.ProductTypeRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.service.ProductTypeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/product-type")
@Slf4j
public class ProductTypeController {
    @Autowired
    private ProductTypeService productTypeService;

    @GetMapping(value = "/list")
    public ResponseEntity<?> getListProductType(){
        PaginationResponse<ProductType> productTypePaginationResponse = productTypeService.getListProductType();
        return ResponseEntity.ok(productTypePaginationResponse);
    }

    @GetMapping
    public ResponseEntity<?> getProductTypeDetail(@RequestParam(name = "id") String name){
        ProductType productType = productTypeService.getProductTypeDetail(name);
        return ResponseEntity.ok(productType);
    }

    @PostMapping()
    public ResponseEntity<?> createProductType(@RequestBody ProductTypeRequest dishTypeRequest){
        String productType = productTypeService.createProductType(dishTypeRequest);
        return ResponseEntity.ok(productType);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateProductType(@PathVariable Long id, @RequestBody ProductTypeRequest dishTypeRequest){
        ProductType productType = productTypeService.updateProductType(id, dishTypeRequest);
        return ResponseEntity.ok(productType);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteProductType(@PathVariable Long id){
        ProductType productType = productTypeService.deleteProductType(id);
        return ResponseEntity.ok(productType);
    }
}
