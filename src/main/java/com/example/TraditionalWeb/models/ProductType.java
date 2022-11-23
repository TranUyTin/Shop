package com.example.TraditionalWeb.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "product-type")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class ProductType {

    @Id
    @Column(name = "name")
    private String name;

    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "is_deleted")
    private Boolean isDeleted;

//    @OneToMany(mappedBy = "productType", fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
//    @JsonIgnore
//    private Set<Product> products;
//
//    @OneToMany(mappedBy = "productType", fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
//    @JsonIgnore
//    private Set<Brand> brands;

}
