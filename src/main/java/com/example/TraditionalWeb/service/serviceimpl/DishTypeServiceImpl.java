package com.example.TraditionalWeb.service.serviceimpl;

import com.example.TraditionalWeb.models.Dish;
import com.example.TraditionalWeb.models.DishType;
import com.example.TraditionalWeb.models.Images;
import com.example.TraditionalWeb.models.request.DishTypeRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.models.response.SummaryPaginationResponse;
import com.example.TraditionalWeb.repository.DishTypeRepository;
import com.example.TraditionalWeb.service.DishTypeService;
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
public class DishTypeServiceImpl implements DishTypeService {

    @Autowired
    DishTypeRepository dishTypeRepository;
    @Override
    public DishType createDishType(DishTypeRequest dishTypeRequest) {
        DishType dishType = new DishType();
        if (dishTypeRepository.existsByName(dishTypeRequest.getName())){
            throw new RuntimeException("Tên đã tồn tại!");
        }
        dishType.setName(dishTypeRequest.getName());
        dishType.setDescription(dishTypeRequest.getDescription());
        dishType.setDeleted(false);
        dishTypeRepository.save(dishType);
        return dishType;
    }

    @Override
    public DishType updateDishType(Long id, DishTypeRequest dishTypeRequest) {
        DishType dishType = dishTypeRepository.findByIdAndIsDeleted(id, false);
        if (dishTypeRepository.findByIdAndIsDeleted(id, false) == null){
            throw new RuntimeException("Loại món ăn không tồn tại!");
        }
        if(dishTypeRepository.existsByName(dishTypeRequest.getName())){
            throw new RuntimeException("Tên đã tồn tại!");
        }
        dishType.setName(dishTypeRequest.getName());
        dishType.setDescription(dishTypeRequest.getDescription());
        dishTypeRepository.save(dishType);
        return dishType;
    }

    @Override
    public DishType getDishTypeDetail(Long id) {
        DishType dishType = dishTypeRepository.findByIdAndIsDeleted(id, false);
        if (dishType == null){
            throw new RuntimeException("Loại món ăn không tồn tại!");
        }
        Set<Dish> dishSet = null;
        if (Objects.nonNull(dishType.getDish())){
            dishSet = dishMapper(dishType.getDish());
        }
        DishType newDishType = new DishType();
        BeanUtils.copyProperties(dishType, newDishType);
        newDishType.setDish(dishSet);
        return newDishType;
    }

    @Override
    public PaginationResponse<DishType> getListDishType(PagingRequest pagingRequest) {
        Specification<DishType> specification = doPredicate(pagingRequest);
        Pageable pageable = PageRequest.of(pagingRequest.getPageNumber() - 1, pagingRequest.getPageSize() );
        Page<DishType> dishTypePage = dishTypeRepository.findAll(specification, pageable);
        List<DishType> dishTypeList = DishDtoMapper(dishTypePage.getContent());
        SummaryPaginationResponse summaryPaginationResponse = SummaryPaginationResponse.builder()
                .count(dishTypePage.getNumberOfElements())
                .total(dishTypePage.getTotalElements())
                .index(pagingRequest.getPageNumber())
                .totalPage(dishTypePage.getTotalPages())
                .build();
        PaginationResponse<DishType> response = new PaginationResponse<>();
        response.setSummary(summaryPaginationResponse);
        response.setData(dishTypeList);
        return response;
    }

    @Override
    public DishType deleteDishType(Long id) {
        DishType dishType = dishTypeRepository.findByIdAndIsDeleted(id, false);
        if(dishType == null){
            throw new RuntimeException("Loại món ăn không tồn tại!");
        }
        dishType.setDeleted(true);
        dishTypeRepository.save(dishType);
        return dishType;
    }

    private Specification<DishType> doPredicate(PagingRequest pagingRequest){

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

    private List<DishType> DishDtoMapper (List<DishType> dishTypeList){

        List<DishType> dishTypeDTOList = new LinkedList<>();
        if(Objects.nonNull(dishTypeList)){
            for(DishType dishType : dishTypeList){
                DishType dishTypeDto = new DishType();
                if(!dishType.getIsDeleted()){
                    BeanUtils.copyProperties(dishType, dishTypeDto);
                    dishTypeDTOList.add(dishTypeDto);
                }

            }
        }
        return dishTypeDTOList;
    }

    private Set<Dish> dishMapper(Set<Dish> dishList){
        Set<Dish> dishSet = new HashSet<>();
        dishList.forEach((dish -> {
            Dish dishes = new Dish();
            BeanUtils.copyProperties(dish, dishes);
            dishSet.add(dishes);
        }));
        return dishSet;
    }
}
