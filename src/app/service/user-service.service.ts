import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, API_HOST } from '../constant/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  isResetCartHeader = false;
  getListUser(data){
    const {pageNumber, pageSize, sortColumn, isAscSort} = data;
    const query = `?pageNumber=${pageNumber}&pageSize=${pageSize}&sortColumn=${sortColumn}&isAscSort=${isAscSort}`
    return this.http.get(API_HOST + API.LIST_USER + query);
  }

  getListProduct(data){
    const {pageNumber, pageSize, sortColumn, isAscSort} = data;
    const query = `?pageNumber=${pageNumber}&pageSize=${pageSize}&sortColumn=${sortColumn}&isAscSort=${isAscSort}`
    return this.http.get(API_HOST + API.LIST_PRODUCT + query);
  }

  getListProductType(data){
    const {pageNumber, pageSize, sortColumn, isAscSort} = data;
    const query = `?pageNumber=${pageNumber}&pageSize=${pageSize}&sortColumn=${sortColumn}&isAscSort=${isAscSort}`
    return this.http.get(API_HOST + API.LIST_PRODUCT_TYPE + query);
  }

  getListProductTypeDetails(id){
    const query = `?id=${id}`
    return this.http.get(API_HOST + API.LIST_PRODUCT_DETAILS + query);
  }

  getListCategory(data){
    const {pageNumber, pageSize, sortColumn, isAscSort, name} = data;
    const query = `?pageNumber=${pageNumber}&pageSize=${pageSize}&sortColumn=${sortColumn}&isAscSort=${isAscSort}&name=${name}`
    return this.http.get(API_HOST + API.LIST_CATEGORY + query);
  }

  getListProductDetails(id){
    return this.http.get(API_HOST + API.PRODUCT_DETAILS + `/${id}`);
  }

  searchUser(data){
    const query = `?name=${data}`
    return this.http.get(API_HOST + API.SEARCH_USER + query);
  }

  getListProductRecommend(id){
    return this.http.get(API_HOST + API.LIST_CATEGORY_RECOMMEND + `?id=${id}`);
  }

  searchProduct(data) {
    const {pageNumber, pageSize, sortColumn, isAscSort, name} = data;
    const query = `?pageNumber=${pageNumber}&pageSize=${pageSize}&sortColumn=${sortColumn}&isAscSort=${isAscSort}&name=${name}`
    return this.http.get(API_HOST + API.SEARCH_PRODUCT + query)
  }

  addCart(data){
    const {cartId, productId} = data;
    const payload = {
      cartId: cartId,
      productId: productId
    }
    return this.http.post(API_HOST + API.ADD_CART, payload)
  }

  getCart(id){
    return this.http.get(API_HOST + API.GET_CART + id)
  }

  getListCart(id){
    return this.http.get(API_HOST + API.GET_LIST_CART + id)
  }

  increaseAmount(id){
    return this.http.put(API_HOST + API.INCREASE_AMOUNT_PRODUCT + id,null);
  }

  decreaseAmount(id){
    return this.http.put(API_HOST + API.DECREASE_AMOUNT_PRODUCT + id,null);
  }

  deleteProduct(id){
    return this.http.delete(API_HOST + API.DELETE_PRODUCT + id)
  }

  cleanCart(id) {
    return this.http.delete(API_HOST + API.CLEAN_CART + id)
  }

  searchBill(id) {
    return this.http.get(API_HOST + API.SEARCH_BILL + id)
  }

  createBill(data) {
    return this.http.post(API_HOST + API.CREATE_BILL, data)
  }
}
