package com.example.TraditionalWeb.repository;

import com.example.TraditionalWeb.models.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;
@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetails, Long>, JpaSpecificationExecutor<OrderDetails> {
    OrderDetails findByIdAndIsDeleted(Long id, boolean isDeleted);
    @Query(value = "SELECT * FROM order-details o WHERE o.id_product = ?1", nativeQuery = true)
    OrderDetails findByProduct(Long id);
    @Query(value = "SELECT * FROM order-details o WHERE o.cart_id = ?1", nativeQuery = true)
    Set<OrderDetails> getOrderDetailByCart(Long cartId);
}
