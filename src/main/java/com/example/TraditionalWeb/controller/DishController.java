package com.example.TraditionalWeb.controller;

import com.example.TraditionalWeb.exception.UserException;
import com.example.TraditionalWeb.models.Dish;
import com.example.TraditionalWeb.models.request.DishRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.service.DishService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Controller
@RequestMapping(value = "/dish")
@Slf4j
public class DishController {
    @Autowired
    private DishService dishService;

    @GetMapping(value = "/list")
    public ResponseEntity<?> getListDish(PagingRequest pagingRequest){
        PaginationResponse<Dish> dishList = dishService.getListDish(pagingRequest);
        return ResponseEntity.ok(dishList);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getDishDetail(@PathVariable Long id){
        Dish dish = dishService.getDishDetail(id);
        return ResponseEntity.ok(dish);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> createDish(@ModelAttribute DishRequest dishRequest) throws IOException {
        Dish dish = dishService.createDish(dishRequest);
        return ResponseEntity.ok("Tạo món ăn thành công");
    }
    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateDish(@PathVariable Long id, DishRequest dishRequest) throws IOException {
        try {
            Dish dish = dishService.updateDish(id, dishRequest);
            return  ResponseEntity.ok("Cập nhật món ăn thành công");
        } catch (UserException e){
            return ResponseEntity.ok(e.getMessage());
        }

    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteDish(@PathVariable Long id){
        try {
            Dish dish = dishService.deleteDish(id);
            return ResponseEntity.ok("Xóa món ăn thành công!");
        } catch (RuntimeException e){
            return ResponseEntity.ok(e.getMessage());
        }
    }
}
