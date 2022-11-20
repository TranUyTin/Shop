package com.example.TraditionalWeb.repository;

import com.example.TraditionalWeb.models.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface ImagesRepository extends JpaRepository<Images, Long> {
    @Query(value = "SELECT * FROM images u WHERE u.dish_id = ?1 and u.is_deleted = ?2", nativeQuery = true)
    Images findByDishIdAndIsDeleted(Long id, boolean isDeleted);

    @Query(value = "SELECT * FROM images u WHERE u.dish_id = ?1 and u.is_deleted = ?2", nativeQuery = true)
    Set<Images> findByDishAndIsDeleted(Long id, boolean isDeleted);
}
