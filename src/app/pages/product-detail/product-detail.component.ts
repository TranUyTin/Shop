import { ToastService } from 'src/app/service/toast.service';
import { UserService } from 'src/app/service/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { NavigateService } from './../../service/navigate.service';
import { CART } from './../../constant/type';
import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import Swiper, { Autoplay, Controller, EffectFade } from 'swiper';
import { Pagination, Navigation } from 'swiper';

Swiper.use([Autoplay, Navigation, Pagination, Controller, EffectFade]);

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
  productDetails: any = [];
  images = [];
  detailInfo: any = [];
  detailTitle: any = [];
  idParam= ''
  isRunThumnail = false;
  products: any = [];
  userId;
  constructor(public navigateService: NavigateService, 
    public router: ActivatedRoute,
    public userService: UserService,
    private cdr: ChangeDetectorRef,
    public toastService: ToastService) {
      
    }
  async ngOnInit() {
    window.scrollTo(0, 0);
    this.idParam = this.router.snapshot.paramMap.get('id');
    await this.getProductDetails(this.idParam);
    let rand = Math.floor(Math.random()*37) +1;
    this.getListProductRecommend(rand);
  }
  ngAfterViewInit(): void {
    
  }
  ngAfterViewChecked(): void {
    const newIdParams = this.router.snapshot.paramMap.get('id');
    if(newIdParams != this.idParam){
      this.idParam = newIdParams
      this.productDetails = [];
      this.products = [];
      this.getProductDetails(newIdParams);
      console.log(this.idParam)
      this.isRunThumnail = false;
      let rand = Math.floor(Math.random()*37) +1;
      this.getListProductRecommend(rand);
      document.documentElement.scrollTop = 0;
    }
    if(this.isRunThumnail){
      this.thumnail();
      this.isRunThumnail = false;
    }
    this.cdr.detectChanges();
  }
  thumnail() {
    const slider = new Swiper('.gallery-slider', {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      loopedSlides: 20,
    });
    const thumbs = new Swiper('.gallery-thumbs', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      loopedSlides: 20,
      slideToClickedSlide: true,
    });
    slider.controller.control = thumbs;
    thumbs.controller.control = slider;
  }

  getProductDetails(id){
     this.userService.getListProductDetails(id).subscribe(
      (res :any )=> {
        this.productDetails.push(res)
        this.images = this.productDetails[0].images;
        this.isRunThumnail = true;
        this.detailInfo = [];
        const numberInfo = this.productDetails[0].specifications.split(',');
        let tempValue;
        numberInfo.reduce((previousValue: any, currentValue, currentIndex) => {
          if (currentIndex == numberInfo.length - 1) {
            return;
          }
          if (currentIndex == 0) {
            tempValue = previousValue + currentValue;
          }
          if (currentIndex == 1) {
            this.detailInfo.push(tempValue + currentValue);
          }
          if (currentIndex !== 0) {
            if (currentIndex !== 1) {
              this.detailInfo.push(currentValue);
            }
          }
        }, []);

    },(error) => {
      console.log(error)
    } )
  }

  getListProductRecommend(id){
    this.userService.getListProductRecommend(id).subscribe(
      (res :any) =>{
        this.products = res
    },
    (error) => {
      console.log(error)
    } 
    )
  }

  addCart(id, isAddCart){
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
        this.toastService.showSuccess('Thêm sản phẩm vào giỏ hàng thành công');
        this.userService.isResetCartHeader = true;
        if (!isAddCart) {
          this.navigateService.navigatePath('cart')
        }
      }), error => {
        console.log(error);
        this.toastService.showError('Thêm sản phẩm thất bại, vui lòng thử lại')
        this.userService.isResetCartHeader = false;

      }
    }, error => {
        console.log(error)
    })
  }
}
