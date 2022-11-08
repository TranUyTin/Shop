package com.example.TraditionalWeb.service;

import com.example.TraditionalWeb.models.Dish;
import com.example.TraditionalWeb.models.request.DishRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;

import java.io.IOException;

public interface DishService {
    Dish createDish(DishRequest dishRequest) throws IOException;

    Dish updateDish(Long id, DishRequest dishRequest) throws IOException;

    PaginationResponse<Dish> getListDish(PagingRequest pagingRequest);

    Dish getDishDetail(Long id);

    Dish deleteDish(Long id);
}
