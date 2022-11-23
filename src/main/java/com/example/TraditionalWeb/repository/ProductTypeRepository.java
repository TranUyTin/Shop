package com.example.TraditionalWeb.repository;

import com.example.TraditionalWeb.models.ProductType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductTypeRepository extends JpaRepository<ProductType, String>, JpaSpecificationExecutor<ProductType> {
    ProductType findByName(String name);

    ProductType findByIdAndIsDeleted(Long id, boolean isDeleted);

    ProductType findByNameAndIsDeleted(String name, boolean isDeleted);

    List<ProductType> findAll();

    @Override
    Page<ProductType> findAll(Specification<ProductType> spec, Pageable pageable);

    Boolean existsByName(String name);

    Boolean existsByNameAndIsDeleted(String name, boolean isDeleted);
}
