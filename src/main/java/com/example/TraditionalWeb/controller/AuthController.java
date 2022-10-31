package com.example.TraditionalWeb.controller;

import com.example.TraditionalWeb.exception.UserException;
import com.example.TraditionalWeb.models.User;
import com.example.TraditionalWeb.models.request.LoginRequest;
import com.example.TraditionalWeb.models.request.SignUpRequest;
import com.example.TraditionalWeb.models.response.JwtResponse;
import com.example.TraditionalWeb.service.AuthenticationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/auth")
@Slf4j
public class AuthController {
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest){
        try {
            JwtResponse jwtResponse = authenticationService.doLogin(loginRequest.getUsername(), loginRequest.getPassword());
            return ResponseEntity.ok(jwtResponse);
        }
        catch (Exception e){
            return null;
        }
    }

    @PostMapping(value = "/signup")
    public ResponseEntity<?> signup(@RequestBody SignUpRequest signUpRequest){
        try {
            User user = authenticationService.signup(signUpRequest);
            return ResponseEntity.ok(user);
        }
        catch (Exception e){
            throw new UserException("400", e.getMessage());
        }
    }
}
