package com.example.TraditionalWeb.service;

import com.example.TraditionalWeb.models.DishType;
import com.example.TraditionalWeb.models.request.DishTypeRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;

import java.util.List;

public interface DishTypeService {
    DishType createDishType(DishTypeRequest dishTypeRequest);

    DishType updateDishType(Long id, DishTypeRequest dishTypeRequest);

    DishType getDishTypeDetail(Long id);

    PaginationResponse<DishType> getListDishType(PagingRequest pagingRequest);

    DishType deleteDishType(Long id);

}
