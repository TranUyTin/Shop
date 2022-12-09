package com.example.TraditionalWeb.controller;

import com.example.TraditionalWeb.models.User;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.request.SignUpRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value = "/user")
@Slf4j
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping(value ="/{id}")
    public ResponseEntity<?> getUserDetails(@PathVariable Long id){
        User user = userService.findUserById(id);
        return ResponseEntity.ok(user);
    }

    @GetMapping(value ="/search")
    public ResponseEntity<?> getUser(@RequestParam(name = "name") String name){
        try {
            List<User> user = userService.findByFullName(name);
            return ResponseEntity.ok(user);
        } catch (RuntimeException e) {
            return ResponseEntity.ok(e.getMessage());
        }

    }

    @GetMapping(value = "/list")
    public ResponseEntity<?> getListUser(PagingRequest pagingRequest){
        PaginationResponse<User> userList = userService.getListUser(pagingRequest);
        return ResponseEntity.ok(userList);
    }

    @PutMapping
    public ResponseEntity<?> updateUser(@RequestParam(name = "userId") Long id, @RequestBody SignUpRequest signUpRequest){
        User user = userService.updateUser(id, signUpRequest);
        return  ResponseEntity.ok(user);
    }
}
