package com.example.TraditionalWeb.repository;

import com.example.TraditionalWeb.models.Bill;
import jdk.nashorn.internal.runtime.Specialization;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.*;
@Repository
public interface BillRepository extends JpaRepository<Bill, Long>, JpaSpecificationExecutor<Bill> {

    List<Bill> findAll();

    Optional<Bill> findById(Long id);
    Page<Bill> findAll(Specialization spec, Pageable pageable);

    Bill findByIdAndIsDeleted(Long id, boolean isDeleted);
    @Query(value = "SELECT * FROM bill b WHERE b.user_id = ?1", nativeQuery = true)
    Set<Bill> findByUser(Long userId);

}
