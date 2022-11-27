package com.example.TraditionalWeb.service.serviceimpl;

import com.example.TraditionalWeb.dto.BrandDTO;
import com.example.TraditionalWeb.dto.ProductTypeDTO;
import com.example.TraditionalWeb.models.Brand;
import com.example.TraditionalWeb.models.Product;
import com.example.TraditionalWeb.models.ProductType;
import com.example.TraditionalWeb.models.request.BrandRequest;
import com.example.TraditionalWeb.models.request.PagingRequest;
import com.example.TraditionalWeb.models.response.PaginationResponse;
import com.example.TraditionalWeb.models.response.SummaryPaginationResponse;
import com.example.TraditionalWeb.repository.BrandRepository;
import com.example.TraditionalWeb.repository.ProductRepository;
import com.example.TraditionalWeb.repository.ProductTypeRepository;
import com.example.TraditionalWeb.service.BrandService;
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
public class BrandServiceImpl implements BrandService {

    @Autowired
    BrandRepository brandRepository;

    @Autowired
    ProductTypeRepository productTypeRepository;

    @Autowired
    ProductRepository productRepository;

    @Override
    public String createBrand(BrandRequest brandRequest) {
        Brand brand = new Brand();
        if(brandRepository.existsByName(brandRequest.getName())){
            throw new RuntimeException("Ten da ton tai");
        }
        while (brandRepository.findByIdAndIsDeleted(brandRequest.getId(), false) != null) {
            brandRequest.setId(brandRequest.getId()+1);
        }
        ProductType productType = productTypeRepository.findByNameAndIsDeleted(brandRequest.getProductType(), false);
        if(productType == null) {
            throw new RuntimeException("Loai san pham khong ton tai");
        }
        brand.setProductType(productType);
        brand.setId(brandRequest.getId());
        brand.setName(brandRequest.getName());
        brand.setFullName(brandRequest.getFullName());
        brand.setIsDeleted(false);
        brandRepository.save(brand);
        return "tao thanh cong!";
    }

    @Override
    public String updateBrand(Long id, BrandRequest brandRequest) {
        Brand brand = brandRepository.findByIdAndIsDeleted(id, false);
        if(brandRepository.findByIdAndIsDeleted(id, false) == null) {
            throw new RuntimeException("Thuong hieu khong ton tai");
        }
        if(brandRepository.existsByName(brandRequest.getName())) {
            throw new RuntimeException("Ten da ton tai!");
        }
        ProductType productType = productTypeRepository.findByNameAndIsDeleted(brandRequest.getProductType(), false);
        if(productType == null) {
            throw new RuntimeException("Loai san pham khong ton tai");
        }
        brand.setProductType(productType);
        brand.setFullName(brandRequest.getFullName());
        brandRepository.save(brand);
        return "cap nhat thanh cong";
    }

    @Override
    public BrandDTO getBrandDetail(Long id) {
        Brand brand = brandRepository.findByIdAndIsDeleted(id, false);
        if(brand == null) {
            throw new RuntimeException("Thuong hieu khong ton tai");
        }
        Set<Product> productSet = null;
        if (Objects.nonNull(brand.getProducts())){
            productSet = productMapper(brand.getProducts());
        }
        ProductType productType = productTypeRepository.findByNameAndIsDeleted(brand.getProductType().getName(), false);
        BrandDTO brandDTO = new BrandDTO();
        BeanUtils.copyProperties(brand, brandDTO);
        brandDTO.setProducts(productSet);
        brandDTO.setProductType(productType);
        return brandDTO;
    }

    @Override
    public PaginationResponse<BrandDTO> getListBrand(PagingRequest pagingRequest) {
        Specification<Brand> specification = doPredicate(pagingRequest);
        Pageable pageable = PageRequest.of(pagingRequest.getPageNumber() - 1, pagingRequest.getPageSize() );
        Page<Brand> brandPage = brandRepository.findAll(specification, pageable);
        List<BrandDTO> brandList = brandDTOMapper(brandPage.getContent());
        SummaryPaginationResponse summaryPaginationResponse = SummaryPaginationResponse.builder()
                .count(brandPage.getNumberOfElements())
                .total(brandPage.getTotalElements())
                .index(pagingRequest.getPageNumber())
                .totalPage(brandPage.getTotalPages())
                .build();
        PaginationResponse<BrandDTO> response = new PaginationResponse<>();
        response.setSummary(summaryPaginationResponse);
        response.setData(brandList);
        return response;
    }

    @Override
    public String deleteBrand(Long id) {
        Brand brand = brandRepository.findByIdAndIsDeleted(id, false);
        if(brand == null){
            throw new RuntimeException("Thuong hieu khong ton tai");
        }
        brand.setIsDeleted(true);
        brandRepository.save(brand);
        return "Xoa thanh cong!";
    }

    private Specification<Brand> doPredicate(PagingRequest pagingRequest){

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

    private List<BrandDTO> ProductTypeDtoMapper (List<Brand> brandList){

        List<BrandDTO> brandDTOList = new LinkedList<>();
        if(Objects.nonNull(brandList)){
            for(Brand brand : brandList){
                BrandDTO brandDto = new BrandDTO();
                if(!brand.getIsDeleted()){
                    BeanUtils.copyProperties(brand, brandDto);
                    brandDTOList.add(brandDto);
                }

            }
        }
        return brandDTOList;
    }

    private Set<Product> productMapper(Set<Product> products) {
        Set<Product> productSet = new HashSet<>();
        products.forEach((product -> {
            Product product1 = new Product();
            BeanUtils.copyProperties(product, product1);
            productSet.add(product1);
        }));
        return productSet;
    }

    private List<BrandDTO> brandDTOMapper (List<Brand> brandList){
        List<BrandDTO> brandDTOList = new LinkedList<>();
        if(Objects.nonNull(brandDTOList)) {
            for (Brand brand : brandList) {
                BrandDTO brandDTO = new BrandDTO();
                if(productRepository.findByBrandsAndIsDeleted(brand.getName(), "False") == null) {
                    brand.setProducts(null);
                }
                else {
                    brand.setProducts(productRepository.findByBrandsAndIsDeleted(brand.getName(),"False"));
                }
                if (!brand.getIsDeleted()) {
                    BeanUtils.copyProperties(brand, brandDTO);
                    brandDTOList.add(brandDTO);
                }
            }
        }
        return brandDTOList;
    }
}
