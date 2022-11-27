package com.example.TraditionalWeb.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "product_type")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class ProductType {

    @Id
    @Column(name = "name")
    private String name;

    @Column(name = "id")
    private Long id;

    @Column(name = "is_deleted")
    private Boolean isDeleted;

    @Column(name = "full_name")
    private String fullName;

    @OneToMany(mappedBy = "productTypes", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Product> products = new HashSet<>();

    @OneToMany(mappedBy = "productType", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Brand> brands = new HashSet<>();

}
