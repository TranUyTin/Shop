package com.example.TraditionalWeb.repository;

import com.example.TraditionalWeb.models.Bill;
import com.example.TraditionalWeb.models.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;
import java.util.Optional;

public interface BillRepository extends JpaRepository<Bill, Long>, JpaSpecificationExecutor<Bill> {

    List<Bill> findAll();

    Optional<Bill> findById(Long id);

    Bill findByIdAndIsDeleted(Long id, boolean isDeleted);
}
