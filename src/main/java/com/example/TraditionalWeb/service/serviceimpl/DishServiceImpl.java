package com.example.TraditionalWeb.service.serviceimpl;

import com.example.TraditionalWeb.exception.UserException;
import com.example.TraditionalWeb.models.*;
import com.example.TraditionalWeb.models.request.DishRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.models.response.SummaryPaginationResponse;
import com.example.TraditionalWeb.repository.DishRepository;
import com.example.TraditionalWeb.repository.DishTypeRepository;
import com.example.TraditionalWeb.repository.ImagesRepository;
import com.example.TraditionalWeb.repository.UserRepository;
import com.example.TraditionalWeb.service.DishService;
import com.example.TraditionalWeb.util.FileUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.boot.loader.tools.FileUtils;
import javax.persistence.criteria.Predicate;
import java.io.IOException;
import java.util.*;

@Service
@Slf4j
public class DishServiceImpl implements DishService {

    @Autowired
    DishRepository dishRepository;

    @Autowired
    DishTypeRepository dishTypeRepository;

    @Autowired
    ImagesRepository imagesRepository;

    @Value("${file.upload.dir}")
    private String fileUploadDir;

    @Value("${file.delete.dir}")
    private String fileDeleteDir;

    @Value("${images.thumbnail.size}")
    private String thumbnail;

    @Value("${news.file.server.url}")
    private String newsFileServerUrl;

    @Override
    public Dish createDish(DishRequest dishRequest) throws IOException {
        Dish dish = new Dish();
        if(dishRepository.existsByNameAndIsDeleted(dishRequest.getName(), false)){
            throw new UserException("400", "Tên đã tồn tại!");
        }
        dish.setName(dishRequest.getName());
        if(!dishTypeRepository.existsByNameAndIsDeleted(dishRequest.getDishType(),false)) {
            throw new UserException("400", "Loại món ăn không tồn tại!");
        }
        else {
            dish.setDishType(dishTypeRepository.findByNameAndIsDeleted(dishRequest.getDishType(), false));
        }
        FileUtil fileUtil = FileUtil.getInstance();
        Map<String, String> fileMap = fileUtil.upLoadFile(dishRequest.getImages(), fileUploadDir, thumbnail);
        Set<Images> imagesSet = new HashSet<>();
        if (Objects.nonNull(imagesSet)){
            fileMap.forEach((fileName, fileUrl) -> {
                Images images = new Images();
                images.setImageUrl(fileUrl);
                images.setIsDeleted(false);
                images.setDishId(dish);
                imagesSet.add(images);
            });
        }
        dish.setImages(imagesSet);
        dish.setAmount(dishRequest.getAmount());
        dish.setDescription(dishRequest.getDescription());
        dish.setIsDeleted(false);
        dish.setPrice(dishRequest.getPrice());
        dishRepository.save(dish);
        return dish;
    }

    @Override
    public Dish updateDish(Long id, DishRequest dishRequest) throws IOException {
        Dish dish = new Dish();
        if (!dishRepository.existsById(id)){
            throw new UserException("400", "Món ăn không tồn tại!");
        }
        else {
            dish = dishRepository.findByIdAndIsDeleted(id, false);
        }

        if(dishRepository.existsByName(dishRequest.getName())){
            throw new UserException("400", "Tên đã tồn tại!");
        }
        dish.setName(dishRequest.getName());
        if(!dishTypeRepository.existsByNameAndIsDeleted(dishRequest.getDishType(),false)) {
            throw new UserException("400", "Loại món ăn không tồn tại!");
        }
        else {
            dish.setDishType(dishTypeRepository.findByNameAndIsDeleted(dishRequest.getDishType(), false));
        }
        FileUtil fileUtil = FileUtil.getInstance();
        Map<String, String> fileMap = fileUtil.upLoadFile(dishRequest.getImages(), fileUploadDir, thumbnail);
        Set<Images> imagesSet = new HashSet<>();
        if (Objects.nonNull(imagesSet)){
            fileMap.forEach((fileName, fileUrl) -> {
                Images images = new Images();
                images.setImageUrl(fileUrl);
                images.setIsDeleted(false);
                imagesSet.add(images);
            });
        }
        dish.setImages(imagesSet);
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
        Dish newDish = new Dish();
        BeanUtils.copyProperties(dish, newDish);
        newDish.setImages(dishImage);

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
