package com.example.TraditionalWeb.repository;

import com.example.TraditionalWeb.models.Brand;
import com.example.TraditionalWeb.models.OrderDetails;

import java.util.Optional;

public interface OrderDetailRepository {
    OrderDetails findByIdAndIsDeleted(Long id, boolean isDeleted);
}
