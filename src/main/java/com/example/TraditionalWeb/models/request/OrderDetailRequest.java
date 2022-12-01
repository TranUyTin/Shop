package com.example.TraditionalWeb.models.request;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderDetailRequest {
    @NotNull
    private Long cartId;
    @NotNull
    private Long productId;
}
