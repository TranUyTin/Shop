package com.example.TraditionalWeb.models.response;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SummaryPaginationResponse {

    private long total;

    private int count;

    private int index;

    private long totalPage;
}
