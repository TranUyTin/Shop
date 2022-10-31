package com.example.TraditionalWeb.models;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "order-details")
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "dish_id")
    private Dish dish;

    @Column(name = "amount")
    private int amount;

    @ManyToOne
    @JoinColumn(name = "bill_id")
    private Bill bill;

    public Long getId() {
        return id;
    }

    public Bill getBill() {
        return bill;
    }

    public Dish getDish() {
        return dish;
    }

    public int getAmount() {
        return amount;
    }
}
