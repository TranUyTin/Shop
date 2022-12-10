import { AuthenticationService } from './../../service/authentication.service';
import { LogInComponent } from './../log-in/log-in.component';
import { Router } from '@angular/router';
import { NavigateService } from './../../service/navigate.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NAVIGATE } from '../../constant/type';
import { UserService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  constructor(
    public dialog: MatDialog,
    public navigateService: NavigateService,
    public router: Router,
    public AuthenticationService: AuthenticationService,
    private userService: UserService
  ) {
    
  }
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });
  userName = ''
  pageNumber=1;
  pageSize=8;
  sortColumn='id';
  isAscSort=true;
  listProductType = []
  offsetHeight: number = 0;
  listProductItemLaptop = [];
  listProductItemMH = [];
  listProductItemLKMT = [];
  listProductItemLKLT = [];
  listProductItemGG = [];
  cartQuantity;
  userId;
  ngOnInit(): void {
    this.getListProductType();
    this.getListProductTypeDetails(1);
    this.getListProductTypeDetails(2);
    this.getListProductTypeDetails(3);
    this.getListProductTypeDetails(4);
    this.getListProductTypeDetails(5);
    console.log(this.listProductItemLaptop)
    const getItemUserCache = JSON.parse(localStorage.getItem('user'));
    if (getItemUserCache && getItemUserCache.token) {
      this.AuthenticationService.isLogin = true;
      this.userName = getItemUserCache.fullName.split(' ')[getItemUserCache.fullName.split(' ').length -1];
      if (getItemUserCache.isAdmin) {
        this.AuthenticationService.isAdmin = true;
      }
    }
    this.userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['id'] : ''
      this.userService.getCart(this.userId).subscribe((res: any) => {
        const cartId = res.id;
        this.userService.getListCart(cartId).subscribe((res: any) =>{
          this.cartQuantity = res.length;
        })
      });
  }
  ngAfterViewChecked(): void {
    const getItemUserCache = JSON.parse(localStorage.getItem('user'));
    if(getItemUserCache){
      const currentName = getItemUserCache.fullName.split(' ')[getItemUserCache.fullName.split(' ').length -1];
      if(currentName !== this.userName) {
        this.userName = currentName;
      }
    }
    if(this.userService.isResetCartHeader) {
      this.userService.isResetCartHeader = false;
      this.userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['id'] : ''
      this.userService.getCart(this.userId).subscribe((res: any) => {
        const cartId = res.id;
        this.userService.getListCart(cartId).subscribe((res: any) =>{
          this.cartQuantity = res.length;
        })
      });
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogInComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['id'] : ''
      this.userService.getCart(this.userId).subscribe((res: any) => {
        const cartId = res.id;
        this.userService.getListCart(cartId).subscribe((res: any) =>{
          this.cartQuantity = res.length;
        })
      });
    });
  }
  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.AuthenticationService.isLogin = false;
    this.cartQuantity = 0;
  }

  getListProductTypeDetails(id){

    this.userService.getListProductTypeDetails(id).subscribe(
      (res: any) =>{
        switch (id){
          case 1:
            this.listProductItemLaptop = res.brands
            break;
          case 2:
            this.listProductItemMH = res.brands
            break;
          case 3:
            this.listProductItemLKLT = res.brands
            break;
          case 4:
            this.listProductItemLKMT = res.brands
            break;
          case 5:
            this.listProductItemGG = res.brands
            break;
          default:
            break;
        }
      },
      (error:any) => {
        console.log(error);
    })

  }

  getListProductType() {
    const data = {
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
      sortColumn: this.sortColumn,
      isAscSort:this.isAscSort
    }
    this.userService.getListProductType(data).subscribe(
      (res: any) =>{
        res.data.forEach(element => {
          element.name.replaceAll('_', ' ')
        });
        this.listProductType = res.data;

        console.log(res)
    },
      (error:any) => {
        console.log(error);
    })
  }
}
