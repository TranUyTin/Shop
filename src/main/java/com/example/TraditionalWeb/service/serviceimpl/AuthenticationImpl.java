package com.example.TraditionalWeb.service.serviceimpl;

import com.example.TraditionalWeb.exception.UserException;
import com.example.TraditionalWeb.models.User;
import com.example.TraditionalWeb.models.UserDetailsImpl;
import com.example.TraditionalWeb.models.request.SignUpRequest;
import com.example.TraditionalWeb.models.response.JwtResponse;
import com.example.TraditionalWeb.repository.UserRepository;
import com.example.TraditionalWeb.service.AuthenticationService;
import com.example.TraditionalWeb.utils.security.JwtUtils;
import org.springframework.security.core.Authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class AuthenticationImpl implements AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public JwtResponse doLogin(String username, String password) {
//        password = passwordEncoder.encode(password);
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        String jwt = jwtUtils.generateJwtToken(authentication);
        User user = userRepository.findByUsername((userDetails.getUsername()));
        if (Objects.isNull(user)){
            throw new UsernameNotFoundException("You don't have account! Do you want sign up?");
        }
        JwtResponse jwtResponse = new JwtResponse();
        jwtResponse.setToken(jwt);
        jwtResponse.setUsername(user.getUsername());
        jwtResponse.setFullName(user.getFullName());
        jwtResponse.setIsAdmin(user.getAdmin());
        jwtResponse.setEmail(user.getEmail());
        jwtResponse.setPhone(user.getPhone());
        return jwtResponse;
    }

    @Override
    public User signup(SignUpRequest signUpRequest) {
        if(userRepository.existsByUsername(signUpRequest.getUsername())){
            throw new UserException("400", "Error: Username is already taken!");
        }
        if(userRepository.existsByEmail(signUpRequest.getEmail())){
            throw new UserException("400", "Error: Email is already taken!");
        }
        if (userRepository.existsByPhone(signUpRequest.getPhone())){
            throw new UserException("400", "Error: Phone is already taken!");
        }

        User user = new User();
        user.setUsername(signUpRequest.getUsername());
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        user.setFullName(signUpRequest.getFullName());
        user.setEmail(signUpRequest.getEmail());
        user.setPhone(signUpRequest.getPhone());
        user.setIsAdmin(false);
        user.setAddress(signUpRequest.getAddress());
        userRepository.save(user);
        return user;
    }
}
