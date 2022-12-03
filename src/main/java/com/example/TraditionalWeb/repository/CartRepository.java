package com.example.TraditionalWeb.repository;

import com.example.TraditionalWeb.models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long>, JpaSpecificationExecutor<Cart> {

    Cart findByIdAndIsDeleted(Long id, boolean isDeleted);
}
