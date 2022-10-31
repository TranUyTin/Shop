package com.example.TraditionalWeb.models.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PaginationResponse<T> {

    @JsonProperty(value = "summary")
    private SummaryPaginationResponse summaryPaginationResponse;

    @JsonProperty(value = "data")
    private List<T> data;
}
