package com.example.TraditionalWeb.service.serviceimpl;

import com.example.TraditionalWeb.dto.ProductDTO;
import com.example.TraditionalWeb.exception.UserException;
import com.example.TraditionalWeb.models.*;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.request.ProductRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.models.response.SummaryPaginationResponse;
import com.example.TraditionalWeb.repository.BrandRepository;
import com.example.TraditionalWeb.repository.ImagesRepository;
import com.example.TraditionalWeb.repository.ProductRepository;
import com.example.TraditionalWeb.repository.ProductTypeRepository;
import com.example.TraditionalWeb.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.persistence.criteria.Predicate;
import java.io.IOException;
import java.util.*;

@Service
@Slf4j
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProductTypeRepository productTypeRepository;

    @Autowired
    BrandRepository brandRepository;

    @Autowired
    ImagesRepository imagesRepository;

    @Value("${images.thumbnail.size}")
    private String thumbnail;


    @Override
    public Product createProduct(ProductRequest productRequest) {
        Product product = new Product();
        if(productRepository.existsByNameAndIsDeleted(productRequest.getName(), "False")){
            throw new UserException("400", "Tên đã tồn tại!");
        }

        if(!brandRepository.existsByNameAndIsDeleted(productRequest.getBrand(),false)) {
            throw new UserException("400", "Thuong hieu không tồn tại!");
        }
        else {
            product.setBrands(brandRepository.findByNameAndIsDeleted(productRequest.getBrand(), false));
        }


        product.setQuantity(productRequest.getQuantity());
        product.setIsDeleted("False");
        product.setSpecifications((productRequest.getSpecifications()));
        product.setCost(productRequest.getCost());
        productRepository.save(product);
        Set<Images> imagesSet = new HashSet<>();
        if (Objects.nonNull(imagesSet)) {
            Images images = new Images();
            images.setImageUrl(productRequest.getImages());
            images.setIsDeleted(false);
            images.setProduct(product);
            imagesSet.add(images);
        }
        product.setImages(imagesSet);
        productRepository.save(product);
        return product;
    }

    @Override
    public Product updateProduct(Long id, ProductRequest productRequest){
        Product product = new Product();
        if (!productRepository.existsById(id)){
            throw new UserException("400", "Món ăn không tồn tại!");
        }
        else {
            product = productRepository.findByIdAndIsDeleted(id, "False");
        }

        if(productRepository.existsByName(productRequest.getName())){
            throw new UserException("400", "Tên đã tồn tại!");
        }
        product.setName(productRequest.getName());
        if(!productTypeRepository.existsByNameAndIsDeleted(productRequest.getProductType(),false)) {
            throw new UserException("400", "Loại món ăn không tồn tại!");
        }
        else {
            product.setProductTypes(productTypeRepository.findByNameAndIsDeleted(productRequest.getProductType(), false));
        }
        Set<Images> imagesSet = new HashSet<>();
        if (Objects.nonNull(imagesSet)) {
            Images images = new Images();
            images.setImageUrl(productRequest.getImages());
            images.setIsDeleted(false);
            imagesSet.add(images);
            imagesRepository.save(images);
        }
        product.setImages(imagesSet);
        product.setQuantity(productRequest.getQuantity());
        product.setCost(productRequest.getCost());
        productRepository.save(product);
        return product;
    }

    @Override
    public PaginationResponse<ProductDTO> getListProduct(PagingRequest pagingRequest) {
        Specification<Product> specification = doPredicate(pagingRequest);
        Pageable pageable = PageRequest.of(pagingRequest.getPageNumber() - 1, pagingRequest.getPageSize(), Sort.by(pagingRequest.getSortColumn()) );
        Page<Product> productPage = productRepository.findAll(specification, pageable);
        List<ProductDTO> products = DishDtoMapper(productPage.getContent());
        SummaryPaginationResponse summaryPaginationResponse = SummaryPaginationResponse.builder()
                .count(productPage.getNumberOfElements())
                .total(productPage.getTotalElements())
                .index(pagingRequest.getPageNumber())
                .totalPage(productPage.getTotalPages())
                .build();
        PaginationResponse<ProductDTO> response = new PaginationResponse<>();
        response.setSummary(summaryPaginationResponse);
        response.setData(products);
        return response;
    }

    @Override
    public PaginationResponse<ProductDTO> searchListProduct(PagingRequest pagingRequest, String name) {
        Specification<Product> specification = doPredicate(pagingRequest);
        Pageable pageable = null;
        if(pagingRequest.getIsAscSort()){
            pageable = PageRequest.of(pagingRequest.getPageNumber() - 1, pagingRequest.getPageSize(), Sort.by(pagingRequest.getSortColumn()).ascending());
        }
        else {
            pageable = PageRequest.of(pagingRequest.getPageNumber() - 1, pagingRequest.getPageSize(), Sort.by(pagingRequest.getSortColumn()).descending());
        }

        Page<Product> productPage = productRepository.findByName(name, "False", specification, pageable);
        List<ProductDTO> products = DishDtoMapper(productPage.getContent());
        SummaryPaginationResponse summaryPaginationResponse = SummaryPaginationResponse.builder()
                .count(productPage.getNumberOfElements())
                .total(productPage.getTotalElements())
                .index(pagingRequest.getPageNumber())
                .totalPage(productPage.getTotalPages())
                .build();
        PaginationResponse<ProductDTO> response = new PaginationResponse<>();
        response.setSummary(summaryPaginationResponse);
        response.setData(products);
        return response;
    }

    @Override
    public PaginationResponse<ProductDTO> searchListProductByBrand(PagingRequest pagingRequest, String brand) {
        Specification<Product> specification = doPredicate(pagingRequest);
        Pageable pageable = null;
        if(pagingRequest.getIsAscSort()){
            pageable = PageRequest.of(pagingRequest.getPageNumber() - 1, pagingRequest.getPageSize(), Sort.by(pagingRequest.getSortColumn()).ascending());
        }
        else {
            pageable = PageRequest.of(pagingRequest.getPageNumber() - 1, pagingRequest.getPageSize(), Sort.by(pagingRequest.getSortColumn()).descending());
        }
        Page<Product> productPage = productRepository.findByBrand(brand, "False", specification, pageable);
        List<ProductDTO> products = DishDtoMapper(productPage.getContent());
        SummaryPaginationResponse summaryPaginationResponse = SummaryPaginationResponse.builder()
                .count(productPage.getNumberOfElements())
                .total(productPage.getTotalElements())
                .index(pagingRequest.getPageNumber())
                .totalPage(productPage.getTotalPages())
                .build();
        PaginationResponse<ProductDTO> response = new PaginationResponse<>();
        response.setSummary(summaryPaginationResponse);
        response.setData(products);
        return response;
    }

    @Override
    public ProductDTO getProductDetail(Long id) {
        Product product = productRepository.findByIdAndIsDeleted(id, "False");
        if (product == null){
            throw new RuntimeException("Món ăn không tồn tại!");
        }
        Set<Images> dishImage = null;
        if(Objects.nonNull(product.getImages())) {
            dishImage = imageMapper(product.getImages());
        }
        ProductDTO newDish = new ProductDTO();
        BeanUtils.copyProperties(product, newDish);
//        newDish.setImages(dishImage);
        return newDish;
    }

    @Override
    public Product deleteProduct(Long id) {
        Product dish = productRepository.findByIdAndIsDeleted(id, "False");
        if (dish == null){
            throw new RuntimeException("Món ăn không tồn tại!");
        }
        dish.setIsDeleted("True");
        productRepository.save(dish);
        return dish;
    }

    private Specification<Product> doPredicate(PagingRequest pagingRequest){

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

    private List<ProductDTO> DishDtoMapper (List<Product> productList){

        List<ProductDTO> productDTOList = new LinkedList<>();
        Set<Images> productImage = null;
        if(Objects.nonNull(productList)) {
            for (Product product : productList) {
                ProductDTO productDto = new ProductDTO();
                if(product.getIsDeleted().equalsIgnoreCase("False")){
                    Set<Images> imagesSet = imageMapper(product.getImages());
                    BeanUtils.copyProperties(product, productDto);
                    productDto.setImages(imagesSet);
                    productDTOList.add(productDto);
                }
            }
        }
        return productDTOList;
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
