package com.example.TraditionalWeb.dto;

import com.example.TraditionalWeb.models.OrderDetails;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Timestamp;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class BillDTO {
    public Long id;
    public Timestamp createdAt;
    public Boolean status;
    public Boolean statusDelivery;
    public Long total;
    public Boolean isDeleted;
    public Set<OrderDetailDTO> orderDetails;
}
