package com.example.TraditionalWeb.service.serviceimpl;

import com.example.TraditionalWeb.exception.UserException;
import com.example.TraditionalWeb.models.Dish;
import com.example.TraditionalWeb.models.Images;
import com.example.TraditionalWeb.models.OrderDetails;
import com.example.TraditionalWeb.models.User;
import com.example.TraditionalWeb.models.request.DishRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.models.response.SummaryPaginationResponse;
import com.example.TraditionalWeb.repository.DishRepository;
import com.example.TraditionalWeb.repository.DishTypeRepository;
import com.example.TraditionalWeb.repository.ImagesRepository;
import com.example.TraditionalWeb.repository.UserRepository;
import com.example.TraditionalWeb.service.DishService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.persistence.criteria.Predicate;
import java.util.*;

@Service
public class DishServiceImpl implements DishService {

    @Autowired
    DishRepository dishRepository;

    @Autowired
    DishTypeRepository dishTypeRepository;

    @Autowired
    ImagesRepository imagesRepository;

    @Override
    public Dish createDish(DishRequest dishRequest) {
        Dish dish = new Dish();
        if(dishRepository.existsByName(dishRequest.getName())){
            throw new UserException("400", "Tên đã tồn tại!");
        }
        dish.setName(dishRequest.getName());
        dish.setDishType(dishRequest.getDishType());
        dish.setImages(dishRequest.getImages());
        dish.setAmount(dishRequest.getAmount());
        dish.setDescription(dishRequest.getDescription());
        dish.setIsDeleted(false);
        dish.setPrice(dishRequest.getPrice());
        dishRepository.save(dish);
        return dish;
    }

    @Override
    public Dish updateDish(DishRequest dishRequest) {
        Dish dish = new Dish();
        if(dishRepository.existsByName(dishRequest.getName())){
            throw new UserException("400", "Tên đã tồn tại!");
        }
        dish.setName(dishRequest.getName());
        dish.setDishType(dishRequest.getDishType());
        dish.setImages(dishRequest.getImages());
        dish.setAmount(dishRequest.getAmount());
        dish.setDescription(dishRequest.getDescription());
        dish.setPrice(dishRequest.getPrice());
        dishRepository.save(dish);
        return dish;
    }

    @Override
    public PaginationResponse<Dish> getListDish(PagingRequest pagingRequest) {
        Specification<Dish> specification = doPredicate(pagingRequest);
        Pageable pageable = PageRequest.of(pagingRequest.getPageNumber() - 1, pagingRequest.getPageSize());
        Page<Dish> dishPage = dishRepository.findAll(specification, pageable);
        List<Dish> dishes = DishDtoMapper(dishPage.getContent());
        SummaryPaginationResponse summaryPaginationResponse = SummaryPaginationResponse.builder()
                .count(dishPage.getNumberOfElements())
                .total(dishPage.getTotalElements())
                .index(pagingRequest.getPageNumber())
                .totalPage(dishPage.getTotalPages())
                .build();
        PaginationResponse<Dish> response = new PaginationResponse<>();
        response.setSummaryPaginationResponse(summaryPaginationResponse);
        response.setData(dishes);
        return response;
    }

    @Override
    public Dish getDishDetail(Long id) {
        Dish dish = dishRepository.findByIdAndIsDeleted(id, false);
        if (dish == null){
            throw new RuntimeException("Món ăn không tồn tại!");
        }
        Set<Images> dishImage = null;
        if(Objects.nonNull(dish.getImages())) {
            dishImage = imageMapper(dish.getImages());
        }
        Set<OrderDetails> orderDetails = null;
        if(Objects.nonNull(dish.getOrderDetails())){
            orderDetails = orderDetailsMapper(dish.getOrderDetails());
        }
        Dish newDish = new Dish();
        BeanUtils.copyProperties(dish, newDish);
        newDish.setImages(dishImage);
        newDish.setOrderDetails(orderDetails);
        return newDish;
    }

    @Override
    public Dish deleteDish(Long id) {
        Dish dish = dishRepository.findByIdAndIsDeleted(id, false);
        if (dish == null){
            throw new RuntimeException("Món ăn không tồn tại!");
        }
        dish.setIsDeleted(true);
        dishRepository.save(dish);
        return dish;
    }

    private Specification<Dish> doPredicate(PagingRequest pagingRequest){

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

    private List<Dish> DishDtoMapper (List<Dish> dishList){

        List<Dish> dishDTOList = new LinkedList<>();
        if(Objects.nonNull(dishList)){
            for(Dish dish : dishList){
                Dish dishDto = new Dish();
                BeanUtils.copyProperties(dish, dishDto);
                dishDTOList.add(dishDto);
            }
        }
        return dishDTOList;
    }

    private Set<Images> imageMapper(Set<Images> images){
        Set<Images> imagesSet = new HashSet<>();
        images.forEach((img -> {
            Images dishImage = new Images();
            BeanUtils.copyProperties(img, dishImage);
            imagesSet.add(dishImage);
        }));
        return imagesSet;
    }

    private Set<OrderDetails> orderDetailsMapper(Set<OrderDetails> orderDetails){
        Set<OrderDetails> orderDetailsSet = new HashSet<>();
        orderDetails.forEach((orderDetail -> {
            OrderDetails details = new OrderDetails();
            BeanUtils.copyProperties(orderDetail, details);
            orderDetailsSet.add(details);
        }));
        return orderDetailsSet;
    }
}
