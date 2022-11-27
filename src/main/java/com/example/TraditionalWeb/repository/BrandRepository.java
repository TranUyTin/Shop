package com.example.TraditionalWeb.repository;

import com.example.TraditionalWeb.dto.BrandDTO;
import com.example.TraditionalWeb.models.Brand;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BrandRepository extends JpaRepository<Brand, String>, JpaSpecificationExecutor<Brand> {
    List<Brand> findAll();

    Optional<Brand> findById(Long id);

    Brand findByIdAndIsDeleted(Long id, boolean isDeleted);

    @Override
    Page<Brand> findAll(Specification<Brand> spec, Pageable pageable);

    Brand findByNameAndIsDeleted(String name, boolean isDeleted);

    Brand findByName(String name);

    Boolean existsByName(String name);

    Boolean existsByNameAndIsDeleted(String name, boolean isDeleted);
}
