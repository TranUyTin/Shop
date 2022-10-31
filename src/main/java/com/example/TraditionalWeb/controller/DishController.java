package com.example.TraditionalWeb.controller;

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

@Controller
@RequestMapping(value = "/dish")
@Slf4j
public class DishController {
    @Autowired
    private DishService dishService;

    @GetMapping(value = "/list")
    public ResponseEntity<?> getListDish(@RequestParam PagingRequest pagingRequest){
        PaginationResponse<Dish> dishList = dishService.getListDish(pagingRequest);
        return ResponseEntity.ok(dishList);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getDishDetail(Long id){
        Dish dish = dishService.getDishDetail(id);
        return ResponseEntity.ok(dish);
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> createDish(DishRequest dishRequest){
        Dish dish = dishService.createDish(dishRequest);
        return ResponseEntity.ok(dish);
    }
    @PutMapping
    public ResponseEntity<?> updateDish(DishRequest dishRequest){
        Dish dish = dishService.updateDish(dishRequest);
        return  ResponseEntity.ok(dish);
    }
}
