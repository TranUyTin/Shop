package com.example.TraditionalWeb.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "product")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_product")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "quantity")
    private Long quantity;

    @Column(name = "specifications")
    private String specifications;

    @Column(name = "cost")
    private Long cost;

    @ManyToOne
    @JoinColumn(name = "brand")
    @JsonIgnore
    private Brand brands;

    @Column(name = "is_deleted")
    private String isDeleted;

    @ManyToOne
    @JoinColumn(name = "product_type")
    @JsonIgnore
    private ProductType productTypes;

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Images> images = new HashSet<>();

//    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    @JsonIgnore
//    private Set<OrderDetails> orderDetails = new HashSet<>();

}
