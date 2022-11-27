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

    ProductTypeDTO getProductTypeDetail(Long id);

    PaginationResponse<ProductType> getListProductType(PagingRequest pagingRequest);

    ProductType deleteProductType(Long id);

}
