package com.example.TraditionalWeb.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "dishtype")
@NoArgsConstructor
@AllArgsConstructor
@Setter
public class DishType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "is_deleted")
    private boolean isDeleted;

    @OneToMany(mappedBy = "dishType", fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.PERSIST})
    @JsonIgnore
    private Set<Dish> dish;

    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }

    public Set<Dish> getDish() {
        return dish;
    }

    public boolean getIsDeleted() {
        return isDeleted;
    }

    public String getDescription() {
        return description;
    }
}
