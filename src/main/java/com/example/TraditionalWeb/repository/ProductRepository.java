package com.example.TraditionalWeb.repository;

import com.example.TraditionalWeb.models.Product;
import com.example.TraditionalWeb.models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {
    List<Product> findAll();

    Optional<Product> findById(Long id);

    Product findByIdAndIsDeleted(Long id, String isDeleted);

    @Override
    Page<Product> findAll(Specification<Product> spec, Pageable pageable);

    Product findByName(String name);

    Boolean existsByName(String name);

    Boolean existsByNameAndIsDeleted(String name, String isDeleted);
    @Query(value = "SELECT * FROM product u WHERE u.brand = ?1 and u.is_deleted = ?2", nativeQuery = true)
    Set<Product> findByBrandsAndIsDeleted(String name, String isDeleted);
}
