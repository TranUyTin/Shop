import { CART } from './../../constant/type';
import {
  AfterViewChecked,
  AfterViewInit,
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
  productDetail: CART[] = [
    {
      id_prodcut: '20950',
      name: ' Laptop Acer Nitro 5 AN515-45-R6EV NH.QBMSV.006 ',
      cost: '22.490.000 VN\u0110',
      specifications:
        'CPU AMD Ryzen R5-5600H (16MB, up to 4.20GHz), RAM 8GB DDR4 3200MHz (1x8GB), SSD 512GB PCIe NVMe, VGA NVIDIA GeForce GTX 1650 4GB GDDR6, Display 15.6Inch FHD IPS 144Hz, Pin 4Cell 57WHrs, Color Shale Black (\u0110en), Weight 2.20 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/20950_laptop_acer_nitro_5_an515_45_r6ev_0.jpg',
        'https://cdn.ankhang.vn/media/product/20950_laptop_acer_nitro_5_an515_45_r6ev_1.jpg',
        'https://cdn.ankhang.vn/media/product/20950_laptop_acer_nitro_5_an515_45_r6ev_2.jpg',
        'https://cdn.ankhang.vn/media/product/20950_laptop_acer_nitro_5_an515_45_r6ev_3.jpg',
        'https://cdn.ankhang.vn/media/product/20950_laptop_acer_nitro_5_an515_45_r6ev_4.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [
        'B\u1ea1n l\u00e0 sinh vi\u00ean, ho\u1eb7c b\u1ea5t k\u1ef3 ai \u0111ang t\u00ecm ki\u1ebfm m\u1ed9t chi\u1ebfc laptop gaming gi\u00e1 r\u1ebb nh\u01b0ng thi\u1ebft k\u1ebf ng\u1ea7u m\u00e0 kh\u00f4ng n\u1eb7ng, hi\u1ec7u n\u0103ng m\u1ea1nh nh\u01b0ng l\u1ea1i kh\u00f4ng n\u00f3ng. Laptop Acer Nitro 5 AN515-45-R6EV NH.QBMSV.006 \u0111\u00e1p \u1ee9ng t\u1ed1t c\u00e1c y\u00eau c\u1ea7u tr\u00ean c\u1ee7a b\u1ea1n. Theo ch\u00e2n An Khang kh\u00e1m ph\u00e1 chi ti\u1ebft m\u00e3 laptop n\u00e0y ngay nh\u00e9.',
        '',
        'Thi\u1ebft k\u1ebf\u00a0laptop Acer Nitro 5 AN515-45\u00a0gaming c\u00e1 t\u00ednh, th\u1eddi th\u01b0\u1ee3ng nh\u01b0ng g\u1ecdn nh\u1eb9. Form d\u00e1ng c\u1ee7a m\u00e1y d\u00e0y b\u1ea3n, c\u1ee9ng c\u00e1p. M\u1eb7t A \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf t\u1ed1i gi\u1ea3n v\u1edbi 2 \u0111\u01b0\u1eddng g\u00e2n l\u00e0 \u0111i\u1ec3m nh\u1ea5n c\u1ef1c \u1ea5n t\u01b0\u1ee3ng, \u1ed1p t\u1ea3n nhi\u1ec7t h\u1ea7m h\u1ed1. To\u00e0n b\u1ed9 th\u00e2n m\u00e1y \u0111\u1ec1u \u0111\u01b0\u1ee3c l\u00e0m t\u1ef1 nh\u1ef1a cao c\u1ea5p, cho ch\u1ea5t l\u01b0\u1ee3ng ho\u00e0n thi\u1ec7n c\u1ef1c t\u1ed1t. M\u1eb7t B v\u1edbi 02 vi\u1ec1n m\u00e0n h\u00ecnh si\u00eau m\u1ecfng nh\u01b0ng v\u1eabn gi\u1eef \u0111\u01b0\u1ee3c camera \u0111\u1ec3 ph\u1ee5c v\u1ee5 nhu c\u1ea7u h\u1ed9i h\u1ecdp, h\u1ecdc t\u1eadp v\u00e0 l\u00e0m vi\u1ec7c online. M\u1eb7t C l\u00e0 b\u00e0n ph\u00edm fullsize \u0111\u1eb9p m\u1eaft. M\u1eb7t D v\u1edbi h\u00e0ng lo\u1ea1t h\u1ec7 th\u1ed1ng h\u00fat kh\u00ed \u0111\u1ec3 l\u00e0m m\u00e1t h\u1ed7 tr\u1ee3 t\u1ea3n nhi\u1ec7t.',
        '',
        '\u0110i\u1ec3m n\u1ed5i b\u1eadt nh\u1ea5t mang l\u1ea1i t\u00ean tu\u1ed5i cho d\u00f2ng laptop Acer Nitro 5\u00a0ch\u00ednh l\u00e0 \u1edf h\u1ec7 th\u1ed1ng t\u1ea3n nhi\u1ec7t si\u00eau m\u00e1t m\u1ebb.\u00a0H\u1ec7 th\u1ed1ng c\u1ed5ng t\u1ea3n nhi\u1ec7t \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf th\u00f4ng minh v\u1edbi 04 h\u1ec7 th\u1ed1ng c\u1ed5ng tho\u00e1t kh\u00ed. Trong \u0111\u00f3 c\u00f3 02 h\u1ec7 th\u1ed1ng c\u1ed5ng \u1edf c\u1ea1nh g\u00e1y v\u00e0 02 h\u1ec7 th\u1ed1ng c\u1ed5ng \u1edf 2 c\u1ea1nh b\u00ean; h\u1ec7 th\u1ed1ng c\u1ed5ng thu kh\u00ed th\u00ec n\u1eb1m \u1edf m\u1eb7t \u0111\u00e1y c\u1ee7a m\u00e1y. Ch\u01b0a h\u1ebft, h\u1ec7 th\u1ed1ng t\u1ea3n nhi\u1ec7t c\u1ee7a m\u00e3 m\u00e1y n\u00e0y c\u00f2n \u0111\u01b0\u1ee3c trang b\u1ecb 02 qu\u1ea1t t\u1ea3n nhi\u1ec7t r\u1eddi\u00a0v\u00e0 03 \u1ed1ng \u0111\u1ed3ng r\u1ea5t l\u1edbn, mang l\u1ea1i hi\u1ec7u qu\u1ea3 t\u1ea3n nhi\u1ec7t si\u00eau m\u00e1t m\u1ebb, gi\u00fap nhi\u1ec7t \u0111\u1ed9 c\u1ee7a m\u00e1y lu\u00f4n \u0111\u01b0\u1ee3c ki\u1ec3m so\u00e1t r\u1ea5t t\u1ed1t. B\u1ea1n c\u0169ng c\u00f3 th\u1ec3 d\u1ec5 d\u00e0ng t\u00f9y ch\u1ec9nh t\u1ea3n nhi\u1ec7t th\u00f4ng qua ph\u1ea7n m\u1ec1m NitroSense ch\u1ec9 b\u1eb1ng m\u1ed9t ph\u00edm t\u1eaft.',
        '',
        'Acer Nitro 5 AN515-45-R6EV\u00a0s\u1edf h\u1eefu\u00a0m\u00e0n h\u00ecnh 15.6inch FHD\u00a0hai vi\u1ec1n m\u1ecfng \u0111\u01b0\u1ee3c trang b\u1ecb t\u1ea5m n\u1ec1n IPS c\u00f9ng t\u1ea7n s\u1ed1 qu\u00e9t \u1ea5n t\u01b0\u1ee3ng 144Hz, th\u1eddi gian ph\u1ea3n h\u1ed3i l\u00e0 3ms, cho t\u1ed1c \u0111\u1ed9 t\u00e1i hi\u1ec7n c\u1ee7a h\u00ecnh \u1ea3nh g\u1ea7n nh\u01b0 ngay l\u1eadp t\u1ee9c v\u00e0 kh\u00f4ng c\u00f3 \u0111\u1ed9 tr\u1ec5, mang l\u1ea1i tr\u1ea3i nghi\u1ec7m ch\u01a1i game r\u1ea5t m\u01b0\u1ee3t m\u00e0. V\u1edbi t\u1ea7n s\u1ed1 qu\u00e9t 144Hz nhanh nh\u1ea1y, gamer ch\u1ee7 \u0111\u1ed9ng h\u01a1n trong c\u00e1c cu\u1ed9c t\u1ea5n c\u00f4ng, mang l\u1ea1i chi\u1ebfn th\u1eafng trong c\u00e1c cu\u1ed9c thi \u0111\u1ea5u. V\u1ec1 \u0111\u1ed3 h\u1ecda, m\u00e0n h\u00ecnh Acer AN515-45-R6EV\u00a0ch\u1ec9 s\u1edf h\u1eefu \u0111\u1ed9 bao ph\u1ee7 m\u00e0u \u1edf m\u1ee9c \u1ed5n v\u1edbi 66%sRGB, 50% AdobeRGB, 49% DCi-P3, \u0111\u1ed9 s\u00e1ng 207nits\u00a0v\u00e0 \u0111\u1ed9 sai l\u1ec7ch m\u00e0u 1.37 Delta E. V\u1edbi m\u1ed9t chi\u1ebfc laptop gaming kh\u00f4ng chuy\u00ean \u0111\u1ed3 h\u1ecda th\u00ec \u0111\u00e2y l\u00e0 m\u1ed9t m\u00e0n h\u00ecnh v\u00f4 c\u00f9ng ph\u00f9 h\u1ee3p.',
        '',
        'Laptop Acer Nitro 5 AN515-45-R6EV\u00a0NH.QBMSV.006 s\u1edf h\u1eefu c\u1ea5u h\u00ecnh \u1ea5n t\u01b0\u1ee3ng v\u1edbi cpu Ryzen R5-5600H gi\u00e1 r\u1ebb \u0111\u1ebfn t\u1eeb nh\u00e0 AMD 6 nh\u00e2n 12 lu\u1ed3ng, c\u00f9ng b\u1ed9 nh\u1edb \u0111\u1ec7m 16MB, xung nh\u1ecbp t\u1ed1i \u0111a \u0111\u1ea1t t\u1edbi 4.20GHz. V\u1edbi c\u00e1c th\u00f4ng s\u1ed1 n\u00e0y c\u1ee7a cpu l\u00e0 c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 bi\u1ebft hi\u1ec7u n\u0103ng c\u1ee7a chi\u1ebfc m\u00e1y n\u00e0y kh\u00f4ng h\u1ec1 y\u1ebfu \u1edbt m\u1ed9t ch\u00fat n\u00e0o \u0111\u00fang kh\u00f4ng n\u00e0o. Ngo\u00e0i ra, m\u00e1y c\u00f2n \u0111\u01b0\u1ee3c trang b\u1ecb ram 8GB DDR4 3200MHz v\u00e0 card \u0111\u1ed3 h\u1ecda NVIDIA GeForce GTX 1650 4GB GDDR6 s\u1eb5n s\u00e0ng c\u00e2n m\u01b0\u1ee3t c\u00e1c t\u1ef1a game t\u1eeb LOL, PUBG, GTA5, FIFA, CSGO, v.v... \u0111\u1ebfn Hitman III, GhostRunner, Assassins Creed Valhalla,... hay l\u00e0m \u0111\u1ed3 h\u1ecda, render video ch\u1ee9 \u0111\u1eebng n\u00f3i c\u00e1c t\u00e1c v\u1ee5 v\u0103n ph\u00f2ng nh\u1eb9 nh\u00e0ng. Ngo\u00e0i ra, kh\u1ea3 n\u0103ng n\u00e2ng c\u1ea5p c\u1ee7a m\u00e1y c\u0169ng r\u1ea5t d\u1ed3i d\u00e0o v\u1edbi 02 khe ram, 02 khe SSD M.2 NVMe v\u00e0 01 \u1ed5 HDD.',
        '',
        'M\u00e3\u00a0laptop Acer ryzen 5\u00a0n\u00e0y c\u00f3 b\u00e0n ph\u00edm Full-size v\u1edbi t\u1ed5ng k\u00edch th\u01b0\u1edbc r\u1ed9ng r\u00e3i. Hai c\u1ee5m ph\u00edm WASD v\u00e0 m\u0169i t\u00ean chuy\u00ean game \u0111\u01b0\u1ee3c bao vi\u1ec1n \u0111\u1eadm h\u01a1n, t\u0103ng ph\u1ea3n x\u1ea1 cho ng\u01b0\u1eddi d\u00f9ng. C\u1ea3m gi\u00e1c g\u00f5 khi ch\u01a1i game l\u1eabn nh\u1eadp li\u1ec7u \u0111\u1ec1u r\u1ea5t nh\u1ea1y v\u00e0 n\u1ea3y, t\u1ea1o c\u1ea3m gi\u00e1c tho\u1ea3i m\u00e1i m\u00e0 kh\u00f4ng b\u1ecb m\u1ecfi tay khi ph\u1ea3i d\u00f9ng m\u00e1y t\u00ednh trong m\u1ed9t th\u1eddi gian d\u00e0i. B\u00e0n ph\u00edm c\u00f3 th\u1ec3 \u0111i\u1ec1u ch\u1ec9nh led 4 v\u00f9ng qua NitroSense t\u0103ng h\u1ee9ng th\u00fa khi ch\u01a1i game ho\u1eb7c \u0111\u1ec3 Led tr\u1eafng cho \u0111\u01a1n gi\u1ea3n khi nh\u1eadp li\u1ec7u.\u00a0Touchpad cho c\u1ea3m gi\u00e1c di \u1ed5n v\u00e0 k\u00edch th\u01b0\u1edbc v\u1eeba ph\u1ea3i.',
        '',
        'Th\u01b0\u1eddng c\u00e1c game th\u1ee7 hay ch\u01a1i game b\u1eb1ng chu\u1ed9t v\u00e0 b\u00e0n ph\u00edm ngo\u00e0i n\u00ean Acer \u0111\u00e3 r\u1ea5t ch\u00fa tr\u1ecdng trang b\u1ecb \u0111\u1ea7y \u0111\u1ee7 v\u00e0 t\u01b0\u01a1ng \u0111\u1ed1i nhi\u1ec1u c\u1ed5ng cho h\u1ec7 th\u1ed1ng c\u1ed5ng k\u1ebft n\u1ed1i. V\u00ed d\u1ee5, Acer NH.QBMSV.006\u00a0c\u00f3 t\u1edbi 04 c\u1ed5ng USB g\u1ed3m 01 c\u1ed5ng USB Type-C k\u1ebft n\u1ed1i nhanh nh\u1ea1y v\u00e0 03 c\u1ed5ng USB Type-A cho b\u1ea1n tho\u1ea3i m\u00e1i k\u1ebft n\u1ed1i b\u00e0n ph\u00edm, chu\u1ed9t v\u00e0 c\u1ea3 USB c\u00f9ng m\u1ed9t l\u00fac. Ngo\u00e0i ra, m\u00e1y c\u00f2n trang b\u1ecb s\u1eb5n 01 c\u1ed5ng HDMI n\u1ebfu b\u1ea1n mu\u1ed1n ch\u01a1i game tr\u00ean m\u1ed9t m\u00e0n h\u00ecnh to h\u01a1n, r\u1ed9ng h\u01a1n; hay c\u1ed5ng m\u1ea1ng Lan \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o s\u1ef1 \u1ed5n \u0111\u1ecbnh c\u1ee7a k\u1ebft n\u1ed1i Internet; 01 tai nghe \u0111\u1ec3 ch\u01a1i game n\u1ebfu kh\u00f4ng mu\u1ed1n l\u00e0m phi\u1ec1n ng\u01b0\u1eddi kh\u00e1c.',
        '',
        'Wifi 6 cho ch\u1ea5t l\u01b0\u1ee3ng k\u1ebft n\u1ed1i kh\u00f4ng d\u00e2y \u1ed5n \u0111\u1ecbnh h\u01a1n, ping \u1ed5n \u0111\u1ecbnh h\u01a1n, ch\u1ea5t l\u01b0\u1ee3ng ch\u01a1i game b\u1eb1ng m\u1ea1ng kh\u00f4ng d\u00e2y m\u01b0\u1ee3t m\u00e0 h\u01a1n.',
        'Dung l\u01b0\u1ee3ng pin c\u1ee7a\u00a0Acer Nitro 5 AN515-45-R6EV l\u00e0\u00a04Cell 57WHrs, n\u1ebfu ch\u1ec9 h\u1ecdc t\u1eadp v\u00e0 l\u00e0m vi\u1ec7c th\u00ec th\u1eddi l\u01b0\u1ee3ng pin r\u01a1i v\u00e0o kho\u1ea3ng 3-4h. Tuy nhi\u00ean, n\u1ebfu ch\u01a1i game th\u00ec b\u1ea1n n\u00ean c\u1eafm s\u1ea1c s\u1ebd m\u01b0\u1ee3t m\u00e0 h\u01a1n v\u00e0 kh\u00f4ng s\u1ee3 h\u1ebft pin.',
        '',
        'Ch\u1ebf \u0111\u1ed9 b\u1ea3o h\u00e0nh 3S1 tuy\u1ec7t v\u1eddi c\u1ee7a Acer c\u0169ng l\u00e0 m\u1ed9t \u0111i\u1ec3m c\u1ed9ng. Ch\u00fang ta s\u1ebd ch\u1ec9 ph\u1ea3i b\u1ea3o h\u00e0nh trong 3 ng\u00e0y t\u00ednh c\u1ea3 th\u1ee9 7, ch\u1ee7 nh\u1eadt. N\u1ebfu qua 3 ng\u00e0y m\u00e0 kh\u00f4ng \u0111\u01b0\u1ee3c x\u1eed l\u00fd ch\u00fang ta s\u1ebd \u0111\u01b0\u1ee3c Acer 1 \u0111\u1ed5i 1 cho ng\u01b0\u1eddi d\u00f9ng m\u1ed9t m\u00e3 laptop m\u1edbi toanh t\u01b0\u01a1ng \u0111\u01b0\u01a1ng m\u00e3 laptop n\u00e0y.',
        '',
        'K\u1ebft lu\u1eadn: Laptop Acer Nitro 5 AN515-45-R6EV NH.QBMSV.006 l\u00e0 m\u1ed9t s\u1ef1 l\u1ef1a ch\u1ecdn v\u00f4 c\u00f9ng ph\u00f9 h\u1ee3p v\u1edbi h\u1ecdc sinh sinh vi\u00ean ho\u1eb7c ng\u01b0\u1eddi \u0111ang t\u00ecm m\u1ed9t chi\u1ebfc m\u00e3 laptop gaming gi\u00e1 r\u1ebb, thi\u1ebft k\u1ebf \u0111\u1eb9p, c\u1ea5u h\u00ecnh m\u1ea1nh m\u1ebd, h\u1ec7 th\u1ed1ng t\u1ea3n nhi\u1ec7t si\u00eau m\u00e1t m\u1ebb v\u00e0 m\u1ed9t ch\u1ebf \u0111\u1ed9 b\u1ea3o h\u00e0nh tuy\u1ec7t v\u1eddi.',
        'Tham kh\u1ea3o:',
        'M\u00e3 Gaming ryzen 5 kh\u00e1c:\u00a0Laptop MSI Bravo 15 B5DD 276VN',
        '\u0110\u1ebfn \u0111\u00e2y b\u1ea1n \u0111\u00e3 ch\u1ecdn cho m\u00ecnh \u0111\u01b0\u1ee3c m\u00e3 laptop ph\u00f9 h\u1ee3p v\u1edbi m\u00ecnh ch\u01b0a, n\u1ebfu ch\u1ecdn \u0111\u01b0\u1ee3c r\u1ed3i hay ch\u01b0a ch\u1ecdn \u0111\u01b0\u1ee3c h\u00e3y c\u1ee9 li\u00ean h\u1ec7 v\u1edbi An Khang nh\u00e9. An Khang s\u1ebd gi\u00fap b\u1ea1n.',
        'C\u01a1 s\u1edf 1: S\u1ed1 210 Th\u00e1i H\u00e0, Trung Li\u1ec7t, \u0110\u1ed1ng \u0110a, H\u00e0 N\u1ed9i.\u260e 1900 2655 (M\u00e1y l\u1ebb 101 & 102) / Hotline: 0922 744 999.C\u01a1 s\u1edf 2: S\u1ed1 31 ng\u00f5 100 D\u1ecbch V\u1ecdng H\u1eadu (E2/D21 The Premier), C\u1ea7u Gi\u1ea5y, H\u00e0 N\u1ed9i.\u260e 1900 2655 (M\u00e1y l\u1ebb 301) / Hotline: 0399 655 368',
        'An Khang Computer\u00a0',
      ],
    },
    // {
    //   id_prodcut: '22226',
    //   name: ' CPU Intel Pentium Gold G6405 (4.10GHz, 2 nh\u00e2n 4 lu\u1ed3ng) ',
    //   cost: '2.390.000 VN\u0110',
    //   specifications:
    //     'Socket: FCLGA1200, S\u1ed1 l\u00f5i/lu\u1ed3ng: 2/4, Xung nh\u1ecbp: 4.10GHz, B\u1ed9 nh\u1edb \u0111\u1ec7m: 4MB, \u0110\u1ed3 h\u1ecda t\u00edch h\u1ee3p: Intel UHD Graphics 610, Bus ram h\u1ed7 tr\u1ee3: DDR4 2666MT/s, Thu\u1eadt in th\u1ea1ch b\u1ea3n: 14nm, ',
    //   images: [
    //     'https://cdn.ankhang.vn/media/product/22226_cpu_intel_pentium_gold_g6405_1.jpg',
    //   ],
    //   details: [],
    // },
  ];
  images = [];
  detailInfo: any = [];
  detailTitle: any = [];
  constructor() {}

  ngOnInit(): void {
    this.images = this.productDetail[0].images;
  }
  ngAfterViewInit(): void {
    this.thumnail();

    // get Value Detail Table
    const numberInfo = this.productDetail[0].specifications.split(',');
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
    //
    // for (let i = 0; i < this.detailInfo.length; i++) {
    //   let item = this.detailInfo[i].trim().split(' ')[0];
    //   this.detailTitle.push(item);
    // }
    this.productDetail[0].details.forEach((item, index) => {
      if (item == '') {
        this.productDetail[0].details[index].replace('', '</br>');
      }
      this.productDetail[0].details[1].replaceAll('', '</br>');
    });
  }
  ngAfterViewChecked(): void {}
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
}
