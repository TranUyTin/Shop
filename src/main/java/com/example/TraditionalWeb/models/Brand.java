package com.example.TraditionalWeb.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "branch")
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

    @OneToMany(mappedBy = "brands", fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JsonIgnore
    private Set<Product> products;

//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "product-type", referencedColumnName = "id")
//    private ProductType productType;

}
