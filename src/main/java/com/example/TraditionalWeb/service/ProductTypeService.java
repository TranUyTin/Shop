package com.example.TraditionalWeb.service;

import com.example.TraditionalWeb.dto.ProductTypeDTO;
import com.example.TraditionalWeb.models.ProductType;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.request.ProductTypeRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;

import java.util.List;

public interface ProductTypeService {
    String createProductType(ProductTypeRequest dishTypeRequest);

    ProductType updateProductType(Long id, ProductTypeRequest dishTypeRequest);

    ProductType getProductTypeDetail(String name);

    PaginationResponse<ProductType> getListProductType();

    ProductType deleteProductType(Long id);

}
