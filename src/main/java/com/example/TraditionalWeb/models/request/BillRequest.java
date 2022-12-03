package com.example.TraditionalWeb.models.request;

import com.example.TraditionalWeb.models.OrderDetails;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BillRequest {
//    private Boolean status;
//    private Boolean statusDelivery;
//    private Long total;
//    private Set<OrderDetails> orderDetails;
//    private Long userId;
    private Long cartId;
    private String username;
}
