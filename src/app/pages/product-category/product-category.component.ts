import { UserService } from 'src/app/service/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigateService } from './../../service/navigate.service';
import { CART } from './../../constant/type';
import { Component, OnInit, SimpleChanges, AfterViewChecked } from '@angular/core';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent implements OnInit, AfterViewChecked {

  pageNumber=1;
  pageSize=12;
  sortColumn='cost';
  isAscSort=true;
  collectionSize = 0;
  totalPage = 0
  searchType = [
    {
      id: 1,
      name: 'Mặc định',
      value: 1
      
    },
    {
      id: 2,
      name: 'Giá thấp đến cao',
      value: 2
    },
    {
      id: 3,
      name: 'Giá cao đến thấp',
      value: 3
    },
  ];
  searchTypeName: string = '';
  widthMenu: number | any = 0;
  page: number = 0;
  products: any = [];
  nameParam = '';
  brandName;
  constructor(
    public navigateService: NavigateService,
    public route: Router,
    public router: ActivatedRoute,
    public userService: UserService,
    public toastService: ToastService,
    ) {
  }
  userId;
  ngOnInit(): void {
    this.nameParam = this.router.snapshot.paramMap.get('id')
    window.scrollTo(0, 0);
    if (!this.searchTypeName) {
      this.searchTypeName = this.searchType[0].name;
    }
    this.loadPage(1);
  }


  getCategory(){
    const data = {
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
      sortColumn: this.sortColumn,
      isAscSort:this.isAscSort,
      name : this.nameParam
    }
    this.userService.getListCategory(data).subscribe(
      (res :any) =>{
        this.products = res.data
        this.collectionSize = res.summary.total;
        this.totalPage = res.summary.totalPage;
        this.brandName  = res.data[0].brands.fullName;
    },
    (error) => {
      console.log(error)
    } 
    )
  }

  ngAfterViewChecked(): void {
    const newIdParams = this.router.snapshot.paramMap.get('id');
    if(newIdParams != this.nameParam){
      this.nameParam = newIdParams
      this.getCategory();
    }
  }
  selectSearch(search: string, value:any) {
    this.searchTypeName = search;
    switch (value){
      case 1: {
        this.sortColumn = 'name';
        this.getCategory();
        break;
      }
      case 2: {
        this.sortColumn = 'cost';
        this.isAscSort = true;
        this.getCategory();
        break;
      }
      case 3: {
        this.sortColumn = 'cost';
        this.isAscSort = false;
        this.getCategory();
        break;
      }
      default:
        break;
    }
  }
  loadPage(page){
    this.pageNumber = page;
    this.getCategory();
    window.scroll(0,0)
  }

  addCart(id){
    this.userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['id'] : ''
    if(!this.userId) {
      this.toastService.showWarning('Vui lòng đăng nhập để tiếp tục!');
      return;
    };
    this.userService.getCart(this.userId).subscribe((res: any) => {
      const cartId = res.id;
      const data = {
        cartId : cartId,
        productId : id
      }
      this.userService.addCart(data).subscribe((res: any) => {
        this.toastService.showSuccess('Thêm sản phẩm vào giỏ hàng thành công.');
        this.userService.isResetCartHeader = true;
      }, (error:any) => {
        console.log(error);
        this.toastService.showError('Thêm sản phẩm thất bại, vui lòng thử lại.')
        this.userService.isResetCartHeader = false;
      })
    }, error => {
        console.log(error)
        this.toastService.showError('Thêm sản phẩm thất bại, vui lòng thử lại.')

    })
  }
}
