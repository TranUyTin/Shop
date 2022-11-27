package com.example.TraditionalWeb.service.serviceimpl;

import com.example.TraditionalWeb.dto.ProductTypeDTO;
import com.example.TraditionalWeb.models.Brand;
import com.example.TraditionalWeb.models.Product;
import com.example.TraditionalWeb.models.ProductType;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.request.ProductTypeRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.models.response.SummaryPaginationResponse;
import com.example.TraditionalWeb.repository.ProductTypeRepository;
import com.example.TraditionalWeb.service.ProductTypeService;
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
public class ProductTypeServiceImpl implements ProductTypeService {

    @Autowired
    ProductTypeRepository productTypeRepository;
    @Override
    public String createProductType(ProductTypeRequest productTypeRequest) {
        ProductType productType = new ProductType();
        while (productTypeRepository.findByIdAndIsDeleted(productTypeRequest.getId(), false) != null){
            productTypeRequest.setId(productTypeRequest.getId()+1);
        }
        productType.setName(productTypeRequest.getName());
        productType.setIsDeleted(false);
        productType.setId(productTypeRequest.getId());
        productType.setFullName(productTypeRequest.getFullName());
        productTypeRepository.save(productType);
        return "chuc mung";
    }

    @Override
    public ProductType updateProductType(Long id, ProductTypeRequest productTypeRequest) {
        ProductType productType = productTypeRepository.findByIdAndIsDeleted(id, false);
        if (productTypeRepository.findByIdAndIsDeleted(id, false) == null){
            throw new RuntimeException("Loại món ăn không tồn tại!");
        }
        if(productTypeRepository.existsByName(productTypeRequest.getName())){
            throw new RuntimeException("Tên đã tồn tại!");
        }
        productType.setFullName(productTypeRequest.getFullName());
        productTypeRepository.save(productType);
        return productType;
    }

    @Override
    public ProductTypeDTO getProductTypeDetail(Long id) {
        ProductType productType = productTypeRepository.findByIdAndIsDeleted(id, false);
        if (productType == null){
            throw new RuntimeException("Loại món ăn không tồn tại!");
        }
        Set<Brand> brandSet = null;
        if (Objects.nonNull(productType.getBrands())){
            brandSet = brandMapper(productType.getBrands());
        }
        ProductTypeDTO newDishType = new ProductTypeDTO();
        BeanUtils.copyProperties(productType, newDishType);
        newDishType.setBrands(brandSet);
        return newDishType;
    }

    @Override
    public PaginationResponse<ProductType> getListProductType(PagingRequest pagingRequest) {
        Specification<ProductType> specification = doPredicate(pagingRequest);
        Pageable pageable = PageRequest.of(pagingRequest.getPageNumber() - 1, pagingRequest.getPageSize() );
        Page<ProductType> productTypePage = productTypeRepository.findAll(specification, pageable);
        List<ProductType> productTypeList = productTypeRepository.findAll();
        SummaryPaginationResponse summaryPaginationResponse = SummaryPaginationResponse.builder()
                .count(productTypePage.getNumberOfElements())
                .total(productTypePage.getTotalElements())
                .index(pagingRequest.getPageNumber())
                .totalPage(productTypePage.getTotalPages())
                .build();
        PaginationResponse<ProductType> response = new PaginationResponse<>();
        response.setSummary(summaryPaginationResponse);
        response.setData(productTypeList);
        return response;
    }

    @Override
    public ProductType deleteProductType(Long id) {
        ProductType productType = productTypeRepository.findByIdAndIsDeleted(id, false);
        if(productType == null){
            throw new RuntimeException("Loại món ăn không tồn tại!");
        }
        productType.setIsDeleted(true);
        productTypeRepository.save(productType);
        return productType;
    }

    private Specification<ProductType> doPredicate(PagingRequest pagingRequest){

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

    private List<ProductTypeDTO> ProductTypeDtoMapper (List<ProductType> productTypeList){

        List<ProductTypeDTO> productTypeDTOList = new LinkedList<>();
        if(Objects.nonNull(productTypeList)){
            for(ProductType productType : productTypeList){
                ProductTypeDTO productTypeDto = new ProductTypeDTO();
                if(!productType.getIsDeleted()){
                    BeanUtils.copyProperties(productType, productTypeDto);
                    productTypeDTOList.add(productTypeDto);
                }

            }
        }
        return productTypeDTOList;
    }

    private Set<Brand> brandMapper(Set<Brand> brands){
        Set<Brand> brandSet = new HashSet<>();
        brands.forEach((brand -> {
            Brand brand1 = new Brand();
            BeanUtils.copyProperties(brand, brand1);
            brandSet.add(brand1);
        }));
        return brandSet;
    }
}
