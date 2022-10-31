package com.example.TraditionalWeb.service;

import com.example.TraditionalWeb.models.User;
import com.example.TraditionalWeb.models.request.SignUpRequest;
import com.example.TraditionalWeb.models.response.JwtResponse;
import org.springframework.http.ResponseEntity;

public interface AuthenticationService {

    JwtResponse doLogin(String username, String password);

    User signup(SignUpRequest signUpRequest);
}
