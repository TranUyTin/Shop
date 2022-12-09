package com.example.TraditionalWeb.service;

import com.example.TraditionalWeb.dto.ProductDTO;
import com.example.TraditionalWeb.models.Product;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.request.ProductRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;

import java.io.IOException;

public interface ProductService {
    Product createProduct(ProductRequest dishRequest);

    Product updateProduct(Long id, ProductRequest dishRequest);

    PaginationResponse<ProductDTO> getListProduct(PagingRequest pagingRequest);

    PaginationResponse<ProductDTO> searchListProduct(PagingRequest pagingRequest, String name);

    PaginationResponse<ProductDTO> searchListProductByBrand(PagingRequest pagingRequest, String brand);

    ProductDTO getProductDetail(Long id);

    Product deleteProduct(Long id);
}
