import { ToastService } from './../../service/toast.service';
import { UserService } from 'src/app/service/user-service.service';
import { NavigateService } from './../../service/navigate.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CART } from 'src/app/constant/type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
  constructor(public navigateService: NavigateService,
    public userService: UserService,
    public toastService : ToastService,
    public router: Router) {}
  quantity: any = 1;
  userId;
  totalPrice: number = 0;
  productCart: any= [];
  quantityProduct = 0;
  ngOnInit(): void {
    this.userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['id'] : ''
    if(!this.userId) {
      this.toastService.showWarning('Vui lòng đăng nhập để truy cập vào giỏ hàng!');
      this.navigateService.navigatePath('/')
      return;
    };
    this.getListCart();
  }
  increment(id) {
    this.userService.increaseAmount(id).subscribe(() =>{
      this.getListCart();
    });
  }
  decrement(id) {
    this.userService.decreaseAmount(id).subscribe(() => {
      this.getListCart();
    });
  }

  getListCart(){
    this.userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['id'] : ''
      this.userService.getCart(this.userId).subscribe((res: any) => {
        const cartId = res.id;
        this.userService.getListCart(cartId).subscribe((res: any) =>{
          this.productCart = res;
          this.quantityProduct = res.length;
          this.totalPrice = 0;
          this.productCart.forEach(element =>   {
            this.totalPrice = this.totalPrice + Number(element.total);
          });
        })
      });
  }

  deleteProduct(id){
    this.userService.deleteProduct(id).subscribe((res: any)  => {
      this.getListCart();
      this.toastService.showSuccess('Xóa sản phẩm thành công');
      this.userService.isResetCartHeader= true;
    }, error => {
      console.log(error)
      this.toastService.showError('Xóa sản phẩm thất bại, vui lòng thử lại!');
      this.userService.isResetCartHeader= false;
    }
    )
  }
  checkout() {
    let data = {}
    this.userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['id'] : ''
    const userName = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['username'] : ''
      this.userService.getCart(this.userId).subscribe((res: any) => {
        const cartId = res.id;
        data = {
          cartId : cartId,
          username: userName
        }
        this.userService.createBill(data).subscribe(
          (res: any) => {
            this.userService.cleanCart(cartId).subscribe();
            this.toastService.showSuccess(`Đặt hàng thành công!\n Mã số đơn hàng là ${res.id}`);
            this.userService.isResetCartHeader = true;
            this.productCart = [];
            this.router.navigate(['/'])
          }
        ), error => {
          this.toastService.showError("Đặt hàng thất bại, vui lòng thử lại!")
        }
   });
  }
}
