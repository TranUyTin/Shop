package com.example.TraditionalWeb.repository;

import com.example.TraditionalWeb.models.Dish;
import com.example.TraditionalWeb.models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DishRepository extends JpaRepository<Dish, Long>, JpaSpecificationExecutor<Dish> {
    List<Dish> findAll();

    Optional<Dish> findById(Long id);

    Dish findByIdAndIsDeleted(Long id, boolean isDeleted);

    @Override
    Page<Dish> findAll(Specification<Dish> spec, Pageable pageable);

    Dish findByName(String name);

    Boolean existsByName(String name);

    Boolean existsByNameAndIsDeleted(String name, boolean isDeleted);
}
