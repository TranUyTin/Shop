package com.example.TraditionalWeb.repository;

import com.example.TraditionalWeb.models.OrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;
@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetails, Long>, JpaSpecificationExecutor<OrderDetails> {
    @Query(value = "SELECT * FROM order_details o WHERE o.id = ?1 and o.is_deleted = ?2", nativeQuery = true)
    OrderDetails findByIdAndIsDeleted(Long id, boolean isDeleted);
    @Query(value = "SELECT * FROM order_details o WHERE o.id_product = ?1 and o.cart_id = ?2 and o.is_deleted = ?3", nativeQuery = true)
    OrderDetails findByProduct(Long idProduct, Long cartId, boolean isDeleted);
//    @Query(value = "SELECT * FROM order-details o WHERE o.cart_id = ?1", nativeQuery = true)
    Set<OrderDetails> findByCartId(Long cartId);
    @Query(value = "SELECT * FROM order_details o WHERE o.cart_id = ?1 and o.is_deleted = ?2", nativeQuery = true)
    Set<OrderDetails> findByCartIdAndIsDeleted(Long cartId, boolean isDeleted);
    @Query(value = "SELECT * FROM order_details o WHERE o.bill_id = ?1", nativeQuery = true)
    Set<OrderDetails> findByBillId(Long billId);
}
