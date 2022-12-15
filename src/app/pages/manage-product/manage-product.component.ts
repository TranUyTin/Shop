import { AddProductComponent } from './../add-product/add-product.component';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormService } from 'src/app/service/form.service';
import { NavigateService } from 'src/app/service/navigate.service';
import { UserService } from 'src/app/service/user-service.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css'],
})
export class ManageProductComponent implements OnInit, OnDestroy {
  
  pageNumber=1;
  pageSize=8;
  sortColumn='id';
  isAscSort=true;
  productList :any = [];

  collectionSize = 0;
  totalPage = 0;
  constructor(
    private navigateService: NavigateService,
    public fb: FormBuilder,
    public formSerive: FormService,
    public dialog: MatDialog,
    private userService: UserService,
    public toastService : ToastService
  ) {}

  ngOnInit(): void {
    this.navigateService.currentUrl = this.navigateService.getCurrentUrl();
    this.getListProduct();
  }
  ngOnDestroy(): void {
    this.navigateService.currentUrl = '';
  }
  openAddProduct() {
    this.userService.isEditProduct = false;
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getListProduct();
    })
  }

  openEditProduct(id) {
    this.userService.isEditProduct = true;
    this.userService.getListProductDetails(id).subscribe(
      (res: any) => {
        const dialogRef = this.dialog.open(AddProductComponent, {
         data : res,
         width: '600px',
        });
        dialogRef.afterClosed().subscribe(result => {
          this.getListProduct();
          this.userService.isEditProduct = false;
        })
      }, error => {
        console.log(error)
      }
    )
  }
  
  getListProduct() {
    const data = {
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
      sortColumn: this.sortColumn,
      isAscSort:true
    }
    this.userService.getListProduct(data).subscribe(
      (res: any) =>{
        this.productList = res.data;
        this.collectionSize = res.summary.total;
        this.totalPage = res.summary.totalPage;
    },
      (error:any) => {
        console.log(error);
    })
  }

  loadPage(page){
    this.pageNumber = page;
    this.getListProduct();
  }

  searchProduct(input){
    const dataInput = input.value
    const data = {
      pageNumber: this.pageNumber,
      pageSize: 40,
      sortColumn: 'id_product',
      isAscSort:true,
      name : dataInput
    }
    this.userService.searchProduct(data).subscribe((res: any) => {
      this.productList = res.data;
      this.collectionSize = res.summary.total;
      this.totalPage = res.summary.totalPage;
    })
  }

  deleteProduct(id) {
    this.userService.deleteProductAdmin(id).subscribe(
      (res: any) => {
        this.toastService.showError('Xóa sản phẩm thất bại, vui lòng thử lại!')
      }, error => {
        this.toastService.showSuccess('Xóa sản phẩm thành công!')
        this.getListProduct();
      }
    )
  }


}
