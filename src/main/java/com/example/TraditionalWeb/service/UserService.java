package com.example.TraditionalWeb.service;

import com.example.TraditionalWeb.models.User;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.request.SignUpRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;

import java.util.List;

public interface UserService {

    User updateUser(Long id, SignUpRequest signUpRequest);

    PaginationResponse<User> getListUser(PagingRequest pagingRequest);

    User findUserById(Long id);

   List<User> findByFullName(String name);

}
