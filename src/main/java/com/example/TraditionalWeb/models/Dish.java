package com.example.TraditionalWeb.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "dish")
@NoArgsConstructor
@AllArgsConstructor
@Setter
public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private int price;

    @Column(name = "amount")
    private int amount;

    @Column(name = "is_deleted")
    private Boolean isDeleted;

    @ManyToOne()
    @JoinColumn(name = "dish_type_id")
    @JsonIgnore
    private DishType dishType;

    @OneToMany(mappedBy = "dishId", fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JsonIgnore
    private Set<Images> images;

    @OneToMany(mappedBy = "dish", fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JsonIgnore
    private Set<OrderDetails> orderDetails;

    public int getAmount() {
        return amount;
    }

    public Boolean getDeleted() {
        return isDeleted;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public DishType getDishType() {
        return dishType;
    }

    public int getPrice() {
        return price;
    }

    public Set<Images> getImages() {
        return images;
    }

    public String getDescription() {
        return description;
    }

    public Set<OrderDetails> getOrderDetails() {
        return orderDetails;
    }
}
