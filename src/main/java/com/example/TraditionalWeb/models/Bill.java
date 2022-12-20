package com.example.TraditionalWeb.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "bill")
@NoArgsConstructor
@AllArgsConstructor
@Setter
public class Bill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "create_date")
    @CreationTimestamp
    private Timestamp createdAt;

    @Column(name = "status")
    private Boolean status;

    @Column(name = "status_delivery")
    private Boolean statusDelivery;

    @Column(name = "total")
    private Long total;

    @Column(name = "is_deleted")
    private Boolean isDeleted;

    @OneToMany(mappedBy = "bill", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<OrderDetails> orderDetails = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_id")
    @JsonIgnore
    private Cart cart;

    public Set<OrderDetails> getOrderDetails() { return orderDetails;}

    public Long getId() {
        return id;
    }

    public Boolean getIsDeleted() {
        return isDeleted;
    }

    public Boolean getStatus() {
        return status;
    }

    public Boolean getStatusDelivery() {
        return statusDelivery;
    }

    public Long getTotal() {
        return total;
    }

    public User getUser() {
        return user;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }
}