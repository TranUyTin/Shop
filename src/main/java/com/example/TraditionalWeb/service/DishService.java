package com.example.TraditionalWeb.service;

import com.example.TraditionalWeb.models.Dish;
import com.example.TraditionalWeb.models.request.DishRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;

public interface DishService {
    Dish createDish(DishRequest dishRequest);

    Dish updateDish(DishRequest dishRequest);

    PaginationResponse<Dish> getListDish(PagingRequest pagingRequest);

    Dish getDishDetail(Long id);

    Dish deleteDish(Long id);
}
