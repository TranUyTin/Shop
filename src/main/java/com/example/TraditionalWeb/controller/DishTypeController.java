package com.example.TraditionalWeb.controller;

import com.example.TraditionalWeb.models.DishType;
import com.example.TraditionalWeb.models.request.DishTypeRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.service.DishTypeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/dish-type")
@Slf4j
public class DishTypeController {
    @Autowired
    private DishTypeService dishTypeService;

    @GetMapping(value = "/list")
    public ResponseEntity<?> getListDishType( PagingRequest pagingRequest){
        PaginationResponse<DishType> dishTypePaginationResponse = dishTypeService.getListDishType(pagingRequest);
        return ResponseEntity.ok(dishTypePaginationResponse);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getDishTypeDetail(@PathVariable Long id){
        DishType dishType = dishTypeService.getDishTypeDetail(id);
        return ResponseEntity.ok(dishType);
    }

    @PostMapping()
    public ResponseEntity<?> createDishType(@RequestBody DishTypeRequest dishTypeRequest){
        DishType dishType = dishTypeService.createDishType(dishTypeRequest);
        return ResponseEntity.ok(dishType);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateDishType(@PathVariable Long id, @RequestBody DishTypeRequest dishTypeRequest){
        DishType dishType = dishTypeService.updateDishType(id, dishTypeRequest);
        return ResponseEntity.ok(dishType);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteDishType(@PathVariable Long id){
        DishType dishType = dishTypeService.deleteDishType(id);
        return ResponseEntity.ok(dishType);
    }
}
