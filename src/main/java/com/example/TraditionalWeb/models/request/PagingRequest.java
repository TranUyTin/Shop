package com.example.TraditionalWeb.models.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PagingRequest {

    @JsonProperty(value = "pageNumber")
    private Integer pageNumber;

    @JsonProperty(value = "pageSize")
    private Integer pageSize;

    @JsonProperty(value = "sortColumn")
    private String sortColumn;

    @JsonProperty(value = "isAscSort")
    private Boolean isAscSort;
}
