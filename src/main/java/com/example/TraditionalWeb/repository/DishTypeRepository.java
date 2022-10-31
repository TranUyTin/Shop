package com.example.TraditionalWeb.repository;

import com.example.TraditionalWeb.models.DishType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DishTypeRepository extends JpaRepository<DishType, Long>, JpaSpecificationExecutor<DishType> {
    DishType findByName(String name);

    DishType findByIdAndIsDeleted(Long id, boolean isDeleted);

    List<DishType> findAll();

    @Override
    Page<DishType> findAll(Specification<DishType> spec, Pageable pageable);

    Boolean existsByName(String name);
}
