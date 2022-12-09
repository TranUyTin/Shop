package com.example.TraditionalWeb.models.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class JwtResponse {
    @JsonProperty(value = "id")
    private Long id;
    @JsonProperty(value = "token")
    private String token;

    @JsonProperty(value = "username")
    private String username;

    @JsonProperty(value = "fullName")
    private String fullName;

    @JsonProperty(value = "isAdmin")
    private Boolean isAdmin;

    @JsonProperty(value = "email")
    private String email;

    @JsonProperty(value = "phone")
    private String phone;

    public JwtResponse(Long id, String token, String username, String fullName, Boolean isAdmin, String email, String phone){
        this.id = id;
        this.token = token;
        this.username = username;
        this.fullName = fullName;
        this.isAdmin = isAdmin;
        this.email = email;
        this.phone = phone;
    }

}
