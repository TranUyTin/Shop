package com.example.TraditionalWeb.repository;

import com.example.TraditionalWeb.models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long>{

    @Query(value = "SELECT * FROM cart u WHERE u.user_id = ?1", nativeQuery = true)
    Cart findByUserId(Long id);

    @Query(value = "SELECT * FROM cart u WHERE u.id = ?1", nativeQuery = true)
    Cart findByCartId(Long id);
}
