package com.example.TraditionalWeb.controller;

import com.example.TraditionalWeb.dto.ProductDTO;
import com.example.TraditionalWeb.exception.UserException;
import com.example.TraditionalWeb.models.Product;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.request.ProductRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Controller
@RequestMapping(value = "/product")
@Slf4j
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping(value = "/list")
    public ResponseEntity<?> getListProduct(PagingRequest pagingRequest){
        PaginationResponse<ProductDTO> productList = productService.getListProduct(pagingRequest);
        return ResponseEntity.ok(productList);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getProductDetail(@PathVariable Long id){
        try {
            ProductDTO dish = productService.getProductDetail(id);
            return ResponseEntity.ok(dish);
        } catch (RuntimeException e) {
            return ResponseEntity.ok(e.getMessage());
        }

    }

    @PostMapping()
    public ResponseEntity<?> createProduct(@RequestBody ProductRequest dishRequest){
            try {
                Product product = productService.createProduct(dishRequest);
                return ResponseEntity.ok("Tạo món ăn thành công");
            }catch (UserException e) {
                return ResponseEntity.ok(e.getMessage());
            }



    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id, ProductRequest productRequest){
        try {
            Product product = productService.updateProduct(id, productRequest);
            return  ResponseEntity.ok("Cập nhật món ăn thành công");
        } catch (UserException e){
            return ResponseEntity.ok(e.getMessage());
        }

    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id){
        try {
            Product product = productService.deleteProduct(id);
            return ResponseEntity.ok("Xóa món ăn thành công!");
        } catch (RuntimeException e){
            return ResponseEntity.ok(e.getMessage());
        }
    }
}
