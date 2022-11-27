package com.example.TraditionalWeb.service;

import com.example.TraditionalWeb.dto.BrandDTO;
import com.example.TraditionalWeb.models.Brand;
import com.example.TraditionalWeb.models.request.BrandRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;

public interface BrandService {
    String createBrand(BrandRequest brandRequest);

    String updateBrand(Long id, BrandRequest brandRequest);

    BrandDTO getBrandDetail(Long id);

    PaginationResponse<BrandDTO> getListBrand(PagingRequest pagingRequest);

    String deleteBrand(Long id);
}
