package com.example.TraditionalWeb.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "brand")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Brand {
    @Column(name = "id")
    private Long id;
    @Id
    @Column(name = "name")
    private String name;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "is_deleted")
    private Boolean isDeleted;

    @OneToMany(mappedBy = "brands", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Product> products = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "product_type")
    @JsonIgnore
    private ProductType productType;

}
