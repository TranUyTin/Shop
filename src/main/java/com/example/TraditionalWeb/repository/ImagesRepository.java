package com.example.TraditionalWeb.repository;

import com.example.TraditionalWeb.models.Images;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ImagesRepository extends JpaRepository<Images, Long> {

    Optional<Images> findByIdAndIsDeleted(Long id, boolean isDeleted);
}
