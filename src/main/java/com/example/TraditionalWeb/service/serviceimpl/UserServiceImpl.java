package com.example.TraditionalWeb.service.serviceimpl;

import com.example.TraditionalWeb.exception.UserException;
import com.example.TraditionalWeb.models.User;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.request.SignUpRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.models.response.SummaryPaginationResponse;
import com.example.TraditionalWeb.repository.UserRepository;
import com.example.TraditionalWeb.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.persistence.criteria.Predicate;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User updateUser(Long id, SignUpRequest signUpRequest) {
        User user = new User();
        user = userRepository.findById(id).orElseThrow(() -> new UserException("400", "User not found username"));
        user.setAddress(signUpRequest.getAddress());
        user.setFullName(signUpRequest.getFullName());
        user.setUsername(signUpRequest.getUsername());
        user.setEmail(signUpRequest.getEmail());
        user.setPhone(signUpRequest.getPhone());
        user.setPassword(signUpRequest.getPassword());
        userRepository.save(user);
        return user;
    }

    @Override
    public PaginationResponse<User> getListUser(PagingRequest pagingRequest) {
        Specification<User> specification = this.doPredicate(pagingRequest);
        Pageable pageable      = PageRequest.of(pagingRequest.getPageNumber() - 1, pagingRequest.getPageSize());
        Page<User> pageUser      = userRepository.findAll(specification, pageable);
        List<User>       users         = UserDtoMapper(pageUser.getContent());
        SummaryPaginationResponse summaryPaginationResponse = SummaryPaginationResponse.builder()
                .count(pageUser.getNumberOfElements())
                .total(pageUser.getTotalElements())
                .index(pagingRequest.getPageNumber())
                .totalPage(pageUser.getTotalPages())
                .build();
        PaginationResponse<User> response = new PaginationResponse<>();
        response.setSummaryPaginationResponse(summaryPaginationResponse);
        response.setData(users);
        return response;
    }

    private Specification<User> doPredicate(PagingRequest pagingRequest){

        return ((root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new LinkedList<>();
                if (pagingRequest.getSortColumn() == null || !StringUtils.hasText(pagingRequest.getSortColumn())){
                    query.orderBy(criteriaBuilder.asc(root.get("id")));
                }
                else if(pagingRequest.getIsAscSort().equals(true)){
                    query.orderBy(criteriaBuilder.asc(root.get(pagingRequest.getSortColumn())));
                }
                else {
                    query.orderBy(criteriaBuilder.desc(root.get(pagingRequest.getSortColumn())));
                }
            return criteriaBuilder.and(predicates.toArray(new Predicate[]{}));
        });
    }

    private List<User> UserDtoMapper (List<User> userList){

        List<User> userDTOList = new LinkedList<>();
        if(Objects.nonNull(userList)){
            for(User user : userList){
                User userDto = new User();
                BeanUtils.copyProperties(user, userDto);
                userDTOList.add(userDto);
            }
        }
        return userDTOList;
    }

    @Override
    public User findUserById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new UserException("400", "User not found username"));
        return user;
    }
}
