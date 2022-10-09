import { Router } from '@angular/router';
import { NavigateService } from './../../service/navigate.service';
import { CART } from './../../constant/type';
import { AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css'],
})
export class ProductCategoryComponent implements OnInit {
  searchType = [
    {
      id: 1,
      value: 'Mặc định',
    },
    {
      id: 2,
      value: 'Giá thấp đến cao',
    },
    {
      id: 3,
      value: 'Giá cao đến thấp',
    },
  ];
  searchTypeName: string = '';
  widthMenu: number | any = 0;
  page: number = 0;
  products: CART[] = [
    {
      id_prodcut: '21111',
      name: ' Laptop Acer Aspire 3 A315-58-35AG NX.ADDSV.00B ',
      cost: '12.490.000 VN\u0110',
      specifications:
        'CPU Intel Core i3-1115G4 (6MB, up to 4.10GHz), RAM 4GB DDR4 2400MHz Onboard, SSD 256GB PCIe NVMe, VGA Intel UHD Graphics, Display 15.6inch FHD Acer ComfyView 60Hz, Color Pure Silver (B\u1ea1c), Pin 3Cell 36WHrs, Weight 1.70 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/21111_laptop_acer_aspire_3_a315_58_35ag_1.jpg',
        'https://cdn.ankhang.vn/media/product/21111_laptop_acer_aspire_3_a315_58_35ag_2.jpg',
        'https://cdn.ankhang.vn/media/product/21111_laptop_acer_aspire_3_a315_58_35ag_3.jpg',
        'https://cdn.ankhang.vn/media/product/21111_laptop_acer_aspire_3_a315_58_35ag_4.jpg',
        'https://cdn.ankhang.vn/media/product/21111_laptop_acer_aspire_3_a315_58_35ag_5.jpg',
        'https://cdn.ankhang.vn/media/product/21111_laptop_acer_aspire_3_a315_58_35ag_6.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [
        'Laptop v\u0103n ph\u00f2ng d\u01b0\u1edbi 10 tri\u1ec7u\u00a0\u0111\u01b0\u1ee3c mua nhi\u1ec1u nh\u1ea5t n\u1eeda \u0111\u1ea7u n\u0103m 2022 g\u1ecdi t\u00ean "Laptop Acer Aspire 3 A315-58-35AG NX.ADDSV.00B" v\u1edbi nhi\u1ec1u \u01b0u \u0111i\u1ec3m ph\u1ee5c v\u1ee5 ri\u00eang cho ph\u00e2n kh\u00fac kh\u00e1ch h\u00e0ng v\u0103n ph\u00f2ng gi\u00e1 r\u1ebb. Thi\u1ebft k\u1ebf tr\u1ebb trung, tr\u1ecdng l\u01b0\u1ee3ng nh\u1eb9 nh\u00e0ng, c\u01a1 \u0111\u1ed9ng; x\u1eed l\u00fd m\u01b0\u1ee3t m\u00e0 c\u00e1c c\u00f4ng vi\u1ec7c v\u0103n ph\u00f2ng, win b\u1ea3n quy\u1ec1n ti\u1ec7n d\u1ee5ng; m\u00e0n h\u00ecnh 15.6inch FHD r\u1ed9ng r\u00e3i, cho h\u00ecnh \u1ea3nh chi ti\u1ebft, ch\u00e2n th\u1ef1c; c\u00f3 camera h\u1ecdc, h\u1ecdp online; k\u1ebft n\u1ed1i m\u00e0n h\u00ecnh ngo\u00e0i \u0111\u1ec3 thuy\u1ebft tr\u00ecnh, gi\u1ea3i tr\u00ed c\u1ef1c \u0111\u01a1n gi\u1ea3n. Xem chi ti\u1ebft c\u00e1c \u0111\u1eb7c \u0111i\u1ec3m c\u1ee7a m\u00e3 laptop n\u00e0y ngay n\u00e0o.',
        '',
        '\u00a0',
        'Laptop v\u0103n ph\u00f2ng d\u01b0\u1edbi 10 tri\u1ec7u \u0111\u01b0\u1ee3c mua nhi\u1ec1u nh\u1ea5t n\u1eeda \u0111\u1ea7u n\u0103m 2022',
        'L\u00e0 m\u1ed9t trong nh\u1eefng m\u00e3 laptop v\u0103n ph\u00f2ng gi\u00e1 r\u1ebb \u0111\u01b0\u1ee3c mua nhi\u1ec1u nh\u1ea5t, d\u0129 nhi\u00ean thi\u1ebft k\u1ebf c\u1ee7a Acer Aspire 3 kh\u00f4ng th\u1ec3 n\u1eb7ng n\u1ec1, c\u1ee5c m\u1ecbch \u0111\u01b0\u1ee3c. M\u00e1y \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf theo phong c\u00e1ch tr\u1ebb trung v\u1edbi t\u00f4ng m\u00e0u b\u1ea1c ,v\u1eeba s\u00e1ng v\u1eeba sang. T\u1ed5ng th\u1ec3 m\u00e1y \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf g\u1ecdn nh\u1eb9, tinh t\u1ebf v\u1edbi tr\u1ecdng l\u01b0\u1ee3ng 1.70 kg, d\u00e0y 19.90mm \u0111\u1ec3 ng\u01b0\u1eddi d\u00f9ng c\u00f3 th\u1ec3 d\u1ec5 d\u00e0ng mang m\u00e1y di chuy\u1ec3n \u0111\u1ebfn nh\u1eefng n\u01a1i m\u00ecnh mu\u1ed1n, t\u1eeb nh\u1eefng n\u01a1i tho\u00e1i m\u00e1i nh\u01b0 nh\u00e0, qu\u00e1n cafe, \u0111\u1ebfn nh\u1eefng n\u01a1i c\u1ea7n s\u1ef1 sang tr\u1ecdng, chuy\u00ean nghi\u1ec7p nh\u01b0 tr\u01b0\u1eddng h\u1ecdc, c\u01a1 quan, \u0111i c\u00f4ng t\u00e1c, ... \u0111\u1ec1u r\u1ea5t g\u1ecdn nh\u1eb9 v\u00e0 h\u1ee3p ho\u00e0n c\u1ea3nh.',
        '',
        'Laptop Acer Aspire 3 A315-58 s\u1edf h\u1eefu hi\u1ebft k\u1ebf tr\u1ebb trung n\u0103ng \u0111\u1ed9ng\u00a0',
        '\u0110i\u1ec3m s\u01a1 c\u1ea5u h\u00ecnh laptop Acer Aspire 3 A315-58-35AG NX.ADDSV.00B:- CPU Intel Core i3-1115G4 (6MB, up to 4.10GHz)- RAM 4GB DDR4 2400MHz Onboard- SSD 256GB PCIe NVMe- VGA Intel UHD Graphics- OS Windows 11 Home',
        '',
        'C\u1ea5u h\u00ecnh\u00a0laptop Acer Aspire 3 A315-58-35AG NX.ADDSV.00B',
        'Laptop Acer Aspire 3 A315-58-35AG NX.ADDSV.00B \u0111\u01b0\u1ee3c trang b\u1ecb c\u1ea5u h\u00ecnh t\u1ed1t nh\u1ea5t trong t\u1ea7m gi\u00e1 d\u01b0\u1edbi 10 tri\u1ec7u, v\u1edbi b\u1ed9 vi x\u1eed l\u00fd Core i3 th\u1ebf h\u1ec7 11 m\u1edbi \u0111\u1ebfn t\u1eeb h\u00e3ng linh ki\u1ec7n Intel n\u1ed5i ti\u1ebfng, ch\u1ee9 kh\u00f4ng ph\u1ea3i chip Pentium hay Celeron nh\u01b0 m\u1ed9t s\u1ed1 m\u00e3 kh\u00e1c. M\u00e3\u00a0laptop core i3 n\u00e0y c\u00f3 b\u1ed9 nh\u1edb \u0111\u1ec7m 6MB Cache v\u00e0 t\u1ed1c \u0111\u1ed9 xung nh\u1ecbp t\u1ed1i \u0111a \u0111\u1ebfn 4.10GHz, k\u1ebft h\u1ee3p v\u1edbi vga Intel UHD Graphics, mang \u0111\u1ebfn s\u1ee9c m\u1ea1nh x\u1eed l\u00fd t\u00e1c v\u1ee5 v\u0103n ph\u00f2ng m\u01b0\u1ee3t m\u00e0, kh\u00f4ng b\u1ecb gi\u1eadt lag. V\u1edbi c\u1ea5u h\u00ecnh n\u00e0y, b\u1ea1n c\u0169ng c\u00f3 th\u1ec3 xem film, \u0111\u1ecdc truy\u1ec7n, l\u01b0\u1edbt web tho\u1ea3i m\u00e1i.',
        '',
        'Laptop Acer Aspire 3 A315-58-35AG NX.ADDSV.00B \u0111\u01b0\u1ee3c trang b\u1ecb c\u1ea5u h\u00ecnh t\u1ed1t nh\u1ea5t trong t\u1ea7m\u00a0gi\u00e1',
        'C\u00f9ng v\u1edbi CPU v\u00e0 VGA, Acer Aspire 3 NX.ADDSV.00B c\u0169ng s\u1edf h\u1eefu ram 4GB DDR4 ti\u1ebft ki\u1ec7m \u0111i\u1ec7n n\u0103ng v\u00e0 SSD PCIe NVMe dung l\u01b0\u1ee3ng 256GB c\u1ef1c nhanh nh\u1ea1y. C\u1ea3 ram v\u00e0 \u1ed5 c\u1ee9ng \u0111\u1ec1u c\u00f2n kh\u1ea3 n\u0103ng n\u00e2ng c\u1ea5p v\u1edbi 01 khe ram tr\u1ed1ng v\u00e0 01 khe HDD s\u1eb5n s\u00e0ng ch\u1edd n\u00e2ng c\u1ea5p. Ngo\u00e0i ra m\u00e1y c\u00f2n c\u00f3 s\u1eb5n Win 11 b\u1ea3n quy\u1ec1n m\u1edbi nh\u1ea5t \u1edf th\u1eddi \u0111i\u1ec3m hi\u1ec7n t\u1ea1i t\u00edch h\u1ee3p s\u1eb5n theo m\u00e1y, ng\u01b0\u1eddi d\u00f9ng kh\u00f4ng c\u1ea7n ph\u1ea3i mua win ri\u00eang \u0111\u1eaft \u0111\u1ecf ho\u1eb7c lo l\u1eafng d\u00f9ng win l\u1eadu h\u1ea1i m\u00e1y.\u0110\u00e2y th\u1eadt s\u1ef1 l\u00e0 m\u1ed9t c\u1ea5u h\u00ecnh cho t\u00e1c v\u1ee5 v\u0103n ph\u00f2ng t\u1ed1t nh\u1ea5t trong t\u1ea7m gi\u00e1.',
        '',
        'Acer Aspire 3 A315-58-35AG X\u1eed l\u00fd m\u01b0\u1ee3t m\u00e0 c\u00e1c t\u00e1c v\u1ee5 v\u0103n ph\u00f2ng, d\u1ec5 n\u00e2ng c\u1ea5p',
        'S\u1edf h\u1eefu thi\u1ebft k\u1ebf tr\u1ebb trung n\u0103ng \u0111\u1ed9ng ch\u01b0a ph\u1ea3i l\u00e0 t\u1ea5t c\u1ea3, c\u00e1c chi ti\u1ebft thi\u1ebft k\u1ebf c\u1ee7a Acer Aspire 3 c\u00f2n r\u1ea5t th\u00f4ng minh. V\u00ed d\u1ee5 nh\u01b0 hai vi\u1ec1n m\u00e0n h\u00ecnh \u0111\u01b0\u1ee3c l\u00e0m si\u00eau m\u1ecfng, v\u1eeba gi\u00fap m\u00e1y gi\u1eef \u0111\u01b0\u1ee3c s\u1ef1 g\u1ecdn nh\u1eb9, v\u1eeba t\u0103ng ch\u1ea5t l\u01b0\u1ee3ng tr\u1ea3i nghi\u1ec7m cho ng\u01b0\u1eddi d\u00f9ng. Do vi\u1ec1n m\u00e0n h\u00ecnh si\u00eau m\u1ecfng n\u00ean ch\u00fang ta c\u1ea3m nh\u1eadn r\u1eb1ng di\u1ec7n t\u00edch tr\u1ea3i nghi\u1ec7m c\u1ee7a ch\u00fang ta nhi\u1ec1u h\u01a1n, kh\u00f4ng b\u1ecb gi\u1edbi h\u1ea1n, kh\u00f4ng g\u00e2y kh\u00f3 ch\u1ecbu, m\u00e0 k\u00edch th\u01b0\u1edbc 15.6inch r\u1ed9ng r\u00e3i l\u1ea1i c\u00e0ng mang \u0111\u1ebfn tr\u1ea3i nghi\u1ec7m \u0111\u1eafm ch\u00ecm v\u00e0o kh\u00f4ng gian m\u00e0n h\u00ecnh m\u00e0 Acer Aspire 3 t\u00e1i hi\u1ec7n.\u00a0',
        '',
        'Acer Aspire 3 c\u00f3 2 vi\u1ec1n m\u00e0n h\u00ecnh si\u00eau m\u1ecfng',
        'Th\u00eam n\u1eefa, \u0111\u1ed9 ph\u00e2n gi\u1ea3i FHD d\u0129 nhi\u00ean cho ch\u1ea5t l\u01b0\u1ee3ng h\u00ecnh \u1ea3nh s\u1eafc n\u00e9t h\u01a1n c\u00e1c m\u00e3 laptop c\u00f9ng t\u1ea7m gi\u00e1 nh\u01b0ng ch\u1ec9 \u0111\u01b0\u1ee3c trang b\u1ecb m\u00e0n h\u00ecnh HD, kh\u00f4ng ch\u1ec9 ch\u1ea5t l\u01b0\u1ee3ng c\u00f4ng vi\u1ec7c \u0111\u01b0\u1ee3c t\u1ed1t h\u01a1n v\u00e0 ch\u1ea5t l\u01b0\u1ee3ng tr\u1ea3i nghi\u1ec7m gi\u1ea3i tr\u00ed c\u0169ng cao h\u01a1n r\u1ea5t nhi\u1ec1u. M\u1ed9t c\u00f4ng ngh\u1ec7 ch\u1ec9 c\u00f3 \u1edf laptop Acer ch\u00ednh l\u00e0 c\u00f4ng ngh\u1ec7 m\u00e0n h\u00ecnh Acer ComfyView v\u1eeba gi\u00fap ch\u1ed1ng ch\u00f3i t\u1ed1t, gi\u1ea3m \u00e1nh s\u00e1ng xanh, ch\u1ed1ng m\u1ecfi m\u1eaft m\u00e0 c\u00f2n cho m\u00e0u s\u1eafc trong tr\u1ebbo, \u0111\u1ed9 t\u01b0\u01a1ng ph\u1ea3n cao, x\u1ee9ng \u0111\u00e1ng v\u00e0o top c\u00e1c m\u00e3 laptop s\u1edf h\u1eefu m\u00e0n h\u00ecnh "x\u1ecbn" nh\u1ea5t trong t\u1ea7m gi\u00e1. \u0110\u00e2y c\u0169ng l\u00e0 m\u1ed9t trong nh\u1eefng l\u00fd do gi\u00fap m\u00e3 laptop n\u00e0y \u0111\u01b0\u1ee3c b\u00e1n ch\u1ea1y nh\u1ea5t trong th\u1eddi gian v\u1eeba qua.',
        '',
        'C\u00f4ng ngh\u1ec7\u00a0Acer ComfyView ch\u1ec9 c\u00f3 \u1edf laptop Acer v\u1edbi nhi\u1ec1u \u01b0u \u0111i\u1ec3m v\u01b0\u1ee3t tr\u1ed9i',
        'H\u1ec7 th\u1ed1ng c\u1ed5ng k\u1ebft n\u1ed1i c\u0169ng l\u00e0 m\u1ed9t trong nh\u1eefng \u0111i\u1ec3m \u1ea5n t\u01b0\u1ee3ng c\u1ee7a m\u00e3 laptop Acer Aspire 3 A315-58 n\u00e0y. M\u00e1y \u0111\u01b0\u1ee3c trang b\u1ecb t\u1edbi t\u1eadn 03 c\u1ed5ng USB, v\u1edbi 02 c\u1ed5ng USB 3.2 Gen 1 t\u1ed1c \u0111\u1ed9 cao, cho kh\u1ea3 n\u0103ng truy\u1ec1n xu\u1ea5t d\u1eef li\u1ec7u nhanh ch\u00f3ng, \u0111\u1ed3ng th\u1eddi tho\u1ea3i m\u00e1i k\u1ebft n\u1ed1i chu\u1ed9t, b\u00e0n ph\u00edm, USB,... M\u00e1y c\u0169ng c\u00f3 s\u1eb5n c\u1ed5ng HDMI hi\u1ec7n \u0111\u1ea1i \u0111\u1ec3 xu\u1ea5t h\u00ecnh ra m\u00e0n h\u00ecnh ngo\u00e0i, ph\u1ee5c v\u1ee5 thuy\u1ebft tr\u00ecnh, xem film m\u00e0n h\u00ecnh l\u1edbn; jack c\u1eafm tai nghe \u0111\u1ec3 h\u1ed7 tr\u1ee3 t\u1eadn h\u01b0\u1edfng \u00e2m thanh nh\u01b0ng kh\u00f4ng l\u00e0m phi\u1ec1n ng\u01b0\u1eddi kh\u00e1c khi \u1edf tr\u01b0\u1eddng h\u1ecdc, c\u01a1 quan,...',
        '',
        '\u0110\u1eb7c bi\u1ec7t l\u00e0 Acer Aspire 3 A315-58 c\u00f2n c\u00f3 c\u1ed5ng m\u1ea1ng Lan, c\u1ef1c k\u1ef3 h\u1eefu \u00edch khi ch\u00fang ta \u0111\u1ebfn tr\u01b0\u1eddng, c\u01a1 quan nh\u01b0ng wifi y\u1ebfu v\u00ec c\u00f3 qu\u00e1 nhi\u1ec1u ng\u01b0\u1eddi b\u1eaft, ho\u1eb7c kh\u00f4ng \u0111\u01b0\u1ee3c trang b\u1ecb wifi, khi \u0111\u00f3 ch\u00fang ta v\u1eabn c\u00f3 th\u1ec3 tho\u1ea3i m\u00e1i k\u1ebft n\u1ed1i ch\u1ee9 kh\u00f4ng nh\u01b0 c\u00e1c m\u00e3 laptop kh\u00e1c b\u1ecb c\u1eaft gi\u1ea3m c\u1ed5ng RJ-45.',
        '',
        'C\u1ed5ng m\u1ea1ng Lan h\u1eefu \u00edch khi \u0111\u1ebfn tr\u01b0\u1eddng h\u1ecdc, c\u01a1 quan, n\u01a1i \u0111\u00f4ng ng\u01b0\u1eddi c\u00f3 wifi y\u1ebfu',
        'D\u00f9 l\u00e0 h\u1ecdc sinh, sinh vi\u00ean, gi\u00e1o vi\u00ean hay ng\u01b0\u1eddi d\u00f9ng v\u0103n ph\u00f2ng \u0111\u1ec1u c\u00f3 nhu c\u1ea7u nh\u1eadp li\u1ec7u l\u1edbn h\u01a1n so v\u1edbi game th\u1ee7, ng\u01b0\u1eddi d\u00f9ng \u0111\u1ed3 h\u1ecda chuy\u00ean nghi\u1ec7p n\u00ean b\u00e0n ph\u00edm s\u1ed1 l\u00e0 b\u1ed9 ph\u1eadn kh\u00f4ng th\u1ec3 thi\u1ebfu, v\u00ec v\u1eady Acer d\u00f9 c\u00f3 thu g\u1ecdn \u0111\u1ec3 Acer Aspire 3 A315-58-35AG c\u00f3 t\u00ednh c\u01a1 \u0111\u1ed9ng h\u01a1n, sang tr\u1ecdng h\u01a1n, nh\u01b0ng v\u1eabn gi\u1eef nguy\u00ean b\u00e0n ph\u00edm s\u1ed1 \u0111\u1ec3 ng\u01b0\u1eddi d\u00f9ng c\u00f3 th\u1ec3 l\u00e0m vi\u1ec7c hi\u1ec7u qu\u1ea3 nh\u1ea5t.',
        '',
        'Laptop\u00a0Acer Aspire 3 A315-58-35AG c\u00f3 b\u00e0n ph\u00edm s\u1ed1',
        'V\u1ec1 ph\u00f4ng ch\u1eef, laptop Acer Aspire 3 s\u1edf h\u1eefu ph\u00f4ng ch\u1eef b\u00e0n ph\u00edm d\u1ec5 nh\u00ecn, k\u00edch th\u01b0\u1edbc ph\u00edm kh\u00e1 l\u1edbn, kho\u1ea3ng c\u00e1ch ph\u00edm h\u1ee3p l\u00fd cho kh\u1ea3 n\u0103ng thao t\u00e1c ch\u00ednh x\u00e1c v\u00e0 nhanh h\u01a1n. \u0110\u1ed9 n\u1ea3y t\u1ed1t, h\u00e0nh tr\u00ecnh ph\u00edm v\u1eeba ph\u1ea3i mang l\u1ea1i c\u1ea3m nh\u1eadn g\u00f5 ph\u00edm r\u00f5 r\u00e0ng, t\u0103ng \u0111\u1ed9 t\u1eadp trung cho ng\u01b0\u1eddi nh\u1eadp li\u1ec7u.',
        '',
        'Ph\u00f4ng ch\u1eef b\u00e0n ph\u00edm d\u1ec5 nh\u00ecn, t\u0103ng ph\u1ea3n x\u1ea1',
        'Laptop Acer Aspire 3 A315-58-35AG NX.ADDSV.00B\u00a0s\u1edf h\u1eefu vi\u00ean pin 3Cell 36WHrs. \u1ede \u0111i\u1ec1u ki\u1ec7n ch\u1ec9 x\u1eed l\u00fd c\u00e1c t\u00e1c v\u1ee5 v\u0103n ph\u00f2ng, ch\u1ebf \u0111\u1ed9 ti\u1ebft ki\u1ec7m pin, \u0111\u1ed9 s\u00e1ng v\u1eeba ph\u1ea3i, m\u00e1y c\u00f3 th\u1ec3 ho\u1ea1t \u0111\u1ed9ng trong 4 ti\u1ebfng \u0111\u1ed3ng h\u1ed3. Nh\u01b0 v\u1eady, m\u00e1y \u0111\u00e1p \u1ee9ng v\u1eeba \u0111\u1ee7 th\u1eddi l\u01b0\u1ee3ng ho\u1ea1t \u0111\u1ed9ng c\u1ee7a m\u1ed9t bu\u1ed5i l\u00e0m vi\u1ec7c ho\u1eb7c h\u1ecdc t\u1eadp c\u1ee7a ng\u01b0\u1eddi d\u00f9ng. Ch\u00fang ta c\u00f3 th\u1ec3 tranh th\u1ee7 b\u1ed5 sung l\u1ea1i pin v\u00e0o th\u1eddi gian ngh\u1ec9 gi\u1ea3i lao.',
        '',
        'K\u1ebft lu\u1eadn: V\u1edbi c\u1ea5u h\u00ecnh t\u1ed1t nh\u1ea5t trong t\u1ea7m gi\u00e1, x\u1eed l\u00fd m\u01b0\u1ee3t c\u00f4ng vi\u1ec7c v\u00e0 h\u1ecdc t\u1eadp; m\u00e0n h\u00ecnh "x\u1ecbn", h\u00ecnh \u1ea3nh \u0111\u1eb9p, s\u1eafc n\u00e9t; h\u1ec7 th\u1ed1ng c\u1ed5ng k\u1ebft n\u1ed1i \u0111\u1ea7y \u0111\u1ee7; c\u00f3 b\u00e0n ph\u00edm s\u1ed1 \u0111\u1ec3 nh\u1eadp li\u1ec7u; thi\u1ebft k\u1ebf sang, tr\u1ebb; n\u00e2ng c\u1ea5p d\u1ec5 d\u00e0ng; Laptop Acer Aspire 3 A315-58-35AG NX.ADDSV.00B ch\u00ednh l\u00e0 ng\u01b0\u1eddi b\u1ea1n \u0111\u1ed3ng h\u00e0nh \u0111\u00e1ng tin c\u1eady cho b\u1ea1n.',
        'Tham kh\u1ea3o:',
        '- B\u1ea3n\u00a0VGA r\u1eddi:\u00a0https://www.ankhang.vn/laptop-acer-aspire-3-a315-57g-32qp.html',
        '\u0110\u1ebfn \u0111\u00e2y b\u1ea1n \u0111\u00e3 ch\u1ecdn cho m\u00ecnh \u0111\u01b0\u1ee3c m\u00e3 laptop ph\u00f9 h\u1ee3p v\u1edbi m\u00ecnh ch\u01b0a, n\u1ebfu ch\u1ecdn \u0111\u01b0\u1ee3c r\u1ed3i hay ch\u01b0a ch\u1ecdn \u0111\u01b0\u1ee3c h\u00e3y c\u1ee9 li\u00ean h\u1ec7 v\u1edbi An Khang nh\u00e9. An Khang s\u1ebd gi\u00fap b\u1ea1n.',
        'C\u01a1 s\u1edf 1: S\u1ed1 25 Y\u00ean L\u00e3ng, Trung Li\u1ec7t, \u0110\u1ed1ng \u0110a, H\u00e0 N\u1ed9i.\u260e 1900 2655 (M\u00e1y l\u1ebb 101 & 102) / Hotline: 0922 744 999.C\u01a1 s\u1edf 2: S\u1ed1 105 M\u1ec5 Tr\u00ec Th\u01b0\u1ee3ng, M\u1ec5 Tr\u00ec, Nam T\u1eeb Li\u00eam, H\u00e0 N\u1ed9i\u260e 1900 2655 (M\u00e1y l\u1ebb 301) / Hotline: 0399 655 368',
        'An Khang Computer\u00a0',
      ],
    },
    {
      id_prodcut: '21112',
      name: ' Laptop Acer Aspire 3 A315-57G-32QP NX.HZRSV.00A ',
      cost: '13.490.000 VN\u0110',
      specifications:
        'CPU Intel Core i3-1005G1 (4MB, up to 3.40GHz), RAM 4GB DDR4 2400MHz Onboard, SSD 256GB PCIe NVMe, VGA NVIDIA Geforce MX330 2GB GDDR5, Display 15.6Inch FHD Acer ComfyView LED backlit TFT LCD, Pin 3Cell 36WHrs, Color Charcoal Black (\u0110en), Weight 1.90 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/21112_laptop_acer_aspire_3_a315_57g_32qp_1.jpg',
        'https://cdn.ankhang.vn/media/product/21112_laptop_acer_aspire_3_a315_57g_32qp_2.jpg',
        'https://cdn.ankhang.vn/media/product/21112_laptop_acer_aspire_3_a315_57g_32qp_3.jpg',
        'https://cdn.ankhang.vn/media/product/21112_laptop_acer_aspire_3_a315_57g_32qp_4.jpg',
        'https://cdn.ankhang.vn/media/product/21112_laptop_acer_aspire_3_a315_57g_32qp_5.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '20802',
      name: ' Laptop Acer TravelMate B3 TMB311-31-P49D NX.VNFSV.005 ',
      cost: 'Li\u00ean h\u1ec7',
      specifications:
        'CPU Intel Pentium N5030 (4MB, up to 3.10GHz), RAM 4GB DDR4 Onboard, SSD 256GB, Display 11.6Inch HD Acer ComfyView Matte, VGA Intel UHD Graphics 605, Pin 3Cell 48WHrs, Color Shale Black (\u0110en), Weight 1.40 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/20802_laptop_acer_travelmate_b3_tmb311_31_p49d_1.jpg',
        'https://cdn.ankhang.vn/media/product/20802_laptop_acer_travelmate_b3_tmb311_31_p49d_2.jpg',
        'https://cdn.ankhang.vn/media/product/20802_laptop_acer_travelmate_b3_tmb311_31_p49d_3.jpg',
        'https://cdn.ankhang.vn/media/product/20802_laptop_acer_travelmate_b3_tmb311_31_p49d_4.jpg',
        'https://cdn.ankhang.vn/media/product/20802_laptop_acer_travelmate_b3_tmb311_31_p49d_5.jpg',
        'https://cdn.ankhang.vn/media/product/20802_laptop_acer_travelmate_b3_tmb311_31_p49d_6.jpg',
        'https://cdn.ankhang.vn/media/product/20802_laptop_acer_travelmate_b3_tmb311_31_p49d_7.jpg',
        'https://cdn.ankhang.vn/media/product/20802_laptop_acer_travelmate_b3_tmb311_31_p49d_8.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '21695',
      name: ' Laptop Gaming Acer Predator Triton 500 SE PT516-52s-91XH NH.QFRSV.001 ',
      cost: '109.990.000 VN\u0110',
      specifications:
        'CPU Intel Core i9-12900H (24MB, up to 5.00GHz), RAM 32GB LPDDR5 4800MHz Onboard, SSD 2TB PCIe NVMe, Display 16.0Inch WQXGA IPS 240Hz 500nits 100%sRGB, VGA NVIDIA GeForce 3080Ti 16GB GDDR6, Pin 4Cell 99.98WHrs, Color Steel Gray (X\u00e1m), Finger Print, Weight 2.40 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/21695_laptop_gaming_acer_predator_triton_500_se_pt516_52s_91xh_nh_qfrsv_001_1.jpg',
        'https://cdn.ankhang.vn/media/product/21695_laptop_gaming_acer_predator_triton_500_se_pt516_52s_91xh_nh_qfrsv_001_2.jpg',
        'https://cdn.ankhang.vn/media/product/21695_laptop_gaming_acer_predator_triton_500_se_pt516_52s_91xh_nh_qfrsv_001_3.jpg',
        'https://cdn.ankhang.vn/media/product/21695_laptop_gaming_acer_predator_triton_500_se_pt516_52s_91xh_nh_qfrsv_001_4.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '20707',
      name: ' Laptop Gaming Acer Nitro 5 Eagle AN515-57-54MV NH.QENSV.003 ',
      cost: '24.990.000 VN\u0110',
      specifications:
        'CPU Intel Core i5-11400H (12MB, up to 4.50GHz), RAM 8GB DDR4 3200MHz (1x8GB), SSD 512GB PCIe NVMe, VGA NVIDIA GeForce RTX 3050 4GB GDDR6, Display 15.6Inch FHD IPS 144Hz, Pin 4Cell 57.5WHrs, Color Shale Black (\u0110en), Weight 2.20 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/20707_laptop_acer_gaming_nitro_5_eagle_an515_57_54mv_nh_qensv_003_1.jpg',
        'https://cdn.ankhang.vn/media/product/20707_laptop_acer_gaming_nitro_5_eagle_an515_57_54mv_nh_qensv_003_2.jpg',
        'https://cdn.ankhang.vn/media/product/20707_laptop_acer_gaming_nitro_5_eagle_an515_57_54mv_nh_qensv_003_3.jpg',
        'https://cdn.ankhang.vn/media/product/20707_laptop_acer_gaming_nitro_5_eagle_an515_57_54mv_nh_qensv_003_4.jpg',
        'https://cdn.ankhang.vn/media/product/20707_laptop_acer_gaming_nitro_5_eagle_an515_57_54mv_nh_qensv_003_5.jpg',
        'https://cdn.ankhang.vn/media/product/20707_laptop_acer_gaming_nitro_5_eagle_an515_57_54mv_nh_qensv_003_6.jpg',
        'https://cdn.ankhang.vn/media/product/20707_laptop_acer_gaming_nitro_5_eagle_an515_57_54mv_nh_qensv_003_7.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
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
    {
      id_prodcut: '20951',
      name: ' Laptop Gaming Acer Nitro 5 Eagle AN515-57-5669 NH.QEHSV.001 ',
      cost: '22.490.000 VN\u0110',
      specifications:
        'CPU Intel Core i5-11400H (12MB, up to 4.50GHz), RAM 8GB DDR4 3200MHz (1x8GB), SSD 512GB PCIe NVMe, VGA NVIDIA GeForce GTX 1650 4GB GDDR6, Display 15.6Inch FHD IPS 144Hz, Pin 4Cell 57.5WHrs, Color Shale Black (\u0110en), Red Backlit Keyboard, Weight 2.20 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/20951_laptop_gaming_acer_nitro_5_eagle_an515_57_5669_nh_qehsv_001_1.jpg',
        'https://cdn.ankhang.vn/media/product/20951_laptop_gaming_acer_nitro_5_eagle_an515_57_5669_nh_qehsv_001_2.jpg',
        'https://cdn.ankhang.vn/media/product/20951_laptop_gaming_acer_nitro_5_eagle_an515_57_5669_nh_qehsv_001_3.jpg',
        'https://cdn.ankhang.vn/media/product/20951_laptop_gaming_acer_nitro_5_eagle_an515_57_5669_nh_qehsv_001_4.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '22132',
      name: ' Laptop Acer Swift 3 SF314-512-56QN NX.K0FSV.002 ',
      cost: '23.990.000 VND',
      specifications:
        'CPU Intel Core i5-1240P (12MB, up to 4.40GHz), RAM 16GB LPDDR4X 4267Hz, SSD 512GB PCIe NVMe, VGA Intel Iris Xe Graphics, Display 14.0Inch QHD IPS 100%sRGB 300nits, Pin 56WHrs, Color Pure Silver (B\u1ea1c), Finger Print, Weight 1.20 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/22132_laptop_acer_swift_3_sf314_512_56qn_nx_k0fsv_002_1.jpg',
        'https://cdn.ankhang.vn/media/product/22132_laptop_acer_swift_3_sf314_512_56qn_nx_k0fsv_002_2.jpg',
        'https://cdn.ankhang.vn/media/product/22132_laptop_acer_swift_3_sf314_512_56qn_nx_k0fsv_002_3.jpg',
        'https://cdn.ankhang.vn/media/product/22132_laptop_acer_swift_3_sf314_512_56qn_nx_k0fsv_002_4.jpg',
        'https://cdn.ankhang.vn/media/product/22132_laptop_acer_swift_3_sf314_512_56qn_nx_k0fsv_002_5.jpg',
        'https://cdn.ankhang.vn/media/product/22132_laptop_acer_swift_3_sf314_512_56qn_nx_k0fsv_002_6.jpg',
        'https://cdn.ankhang.vn/media/product/22132_laptop_acer_swift_3_sf314_512_56qn_nx_k0fsv_002_7.jpg',
        'https://cdn.ankhang.vn/media/product/22132_laptop_acer_swift_3_sf314_512_56qn_nx_k0fsv_002_8.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '22131',
      name: ' Laptop Acer Nitro 5 AN515-46-R6QR NH.QH4SV.001 (RTX 3060 6GB) ',
      cost: '40.990.000 VND',
      specifications:
        'CPU AMD Ryzen R7-6800H (20MB, up to 4.70GHz), RAM 16GB DDR5 4800MHz (1x8GB), SSD 512GB PCIe NVMe, VGA NVIDIA GeForce RTX 3060 6GB GDDR6, Display 15.6Inch FHD IPS 165Hz, Pin 4Cell 57WHrs, Color Obsidian Black (\u0110en), Weight 2.50 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/22131_laptop_acer_nitro_5_an515_46_r6qr_nh_qh4sv_001_1.jpg',
        'https://cdn.ankhang.vn/media/product/22131_laptop_acer_nitro_5_an515_46_r6qr_nh_qh4sv_001_2.jpg',
        'https://cdn.ankhang.vn/media/product/22131_laptop_acer_nitro_5_an515_46_r6qr_nh_qh4sv_001_3.jpg',
        'https://cdn.ankhang.vn/media/product/22131_laptop_acer_nitro_5_an515_46_r6qr_nh_qh4sv_001_4.jpg',
        'https://cdn.ankhang.vn/media/product/22131_laptop_acer_nitro_5_an515_46_r6qr_nh_qh4sv_001_5.jpg',
        'https://cdn.ankhang.vn/media/product/22131_laptop_acer_nitro_5_an515_46_r6qr_nh_qh4sv_001_6.jpg',
        'https://cdn.ankhang.vn/media/product/22131_laptop_acer_nitro_5_an515_46_r6qr_nh_qh4sv_001_7.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '22130',
      name: ' Laptop Acer Nitro 5 AN515-46-R5Z2 NH.QH3SV.001 ',
      cost: '32.990.000 VND',
      specifications:
        'CPU AMD Ryzen R7-6800H (20MB, up to 4.70GHz), RAM 8GB DDR5 4800MHz (1x8GB), SSD 512GB PCIe NVMe, VGA NVIDIA GeForce RTX 3050Ti 4GB GDDR6, Display 15.6Inch FHD IPS 144Hz, Pin 4Cell 57WHrs, Color Obsidian Black (\u0110en), Weight 2.50 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/22130_laptop_acer_nitro_5_an515_46_r5z2_nh_qh3sv_001_1.jpg',
        'https://cdn.ankhang.vn/media/product/22130_laptop_acer_nitro_5_an515_46_r5z2_nh_qh3sv_001_2.jpg',
        'https://cdn.ankhang.vn/media/product/22130_laptop_acer_nitro_5_an515_46_r5z2_nh_qh3sv_001_3.jpg',
        'https://cdn.ankhang.vn/media/product/22130_laptop_acer_nitro_5_an515_46_r5z2_nh_qh3sv_001_4.jpg',
        'https://cdn.ankhang.vn/media/product/22130_laptop_acer_nitro_5_an515_46_r5z2_nh_qh3sv_001_5.jpg',
        'https://cdn.ankhang.vn/media/product/22130_laptop_acer_nitro_5_an515_46_r5z2_nh_qh3sv_001_6.jpg',
        'https://cdn.ankhang.vn/media/product/22130_laptop_acer_nitro_5_an515_46_r5z2_nh_qh3sv_001_7.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '21693',
      name: ' Laptop Acer Aspire 3 A315-58-58ES NX.ADDSV.00H ',
      cost: '14.990.000 VN\u0110',
      specifications:
        'CPU Intel Core i5-1135G7 (8MB, up to 4.20GHz), RAM 4GB DDR4 2400MHz Onboard, SSD 256GB PCIe NVMe, VGA Intel Iris Xe Graphics, Display 15.6inch FHD IPS Acer ComfyView 60Hz, Pin 2Cell 36.7WHrs, Color Pure Silver (B\u1ea1c), Weight 1.70 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/21693_laptop_acer_aspire_3_a315_58_58es_nx_addsv_00h_1.jpg',
        'https://cdn.ankhang.vn/media/product/21693_laptop_acer_aspire_3_a315_58_58es_nx_addsv_00h_2.jpg',
        'https://cdn.ankhang.vn/media/product/21693_laptop_acer_aspire_3_a315_58_58es_nx_addsv_00h_3.jpg',
        'https://cdn.ankhang.vn/media/product/21693_laptop_acer_aspire_3_a315_58_58es_nx_addsv_00h_4.jpg',
        'https://cdn.ankhang.vn/media/product/21693_laptop_acer_aspire_3_a315_58_58es_nx_addsv_00h_5.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '22079',
      name: ' Laptop Acer Gaming Predator Helios 300 PH315-55-751D NH.QFTSV.002 ',
      cost: '57.999.000 VN\u0110',
      specifications:
        'CPU Intel Core i7-12700H (24MB, up to 4.70GHz), RAM 16GB DDR5 4800MHz (2x8GB), SSD 512GB PCIe NVMe, Display 15.6Inch QHD IPS 165Hz Acer ComfyView, VGA NVIDIA GeForce RTX 3070Ti 8GB GDDR6, Pin 4Cell 90WHrs, Color Abyssal Black (\u0110en), Weight 2.40 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/22079_laptop_gaming_acer_predator_helios_300_ph315_55_751d_nh_qftsv_002_1.jpg',
        'https://cdn.ankhang.vn/media/product/22079_laptop_gaming_acer_predator_helios_300_ph315_55_751d_nh_qftsv_002_2.jpg',
        'https://cdn.ankhang.vn/media/product/22079_laptop_gaming_acer_predator_helios_300_ph315_55_751d_nh_qftsv_002_3.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '22078',
      name: ' Laptop Acer Gaming Nitro 5 Tiger AN515-58-79UJ NH.QHYSV.001 ',
      cost: '39.999.000 VN\u0110',
      specifications:
        'CPU Intel Core i7-12700H (24MB, up to 4.70GHz), RAM 16GB DDR5 4800MHz (2x8GB), SSD 512GB PCIe NVMe, VGA NVIDIA GeForce RTX 3060 6GB GDDR6, Display 15.6Inch FHD IPS 165Hz Acer ComfyView, Pin 4Cell 57.5WHrs, Color Obsidian Black (\u0110en), Weight 2.50 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/22078_laptop_acer_gaming_nitro_5_tiger_an515_58_79uj_nh_qhysv_001_1.jpg',
        'https://cdn.ankhang.vn/media/product/22078_laptop_acer_gaming_nitro_5_tiger_an515_58_79uj_nh_qhysv_001_2.jpg',
        'https://cdn.ankhang.vn/media/product/22078_laptop_acer_gaming_nitro_5_tiger_an515_58_79uj_nh_qhysv_001_3.jpg',
        'https://cdn.ankhang.vn/media/product/22078_laptop_acer_gaming_nitro_5_tiger_an515_58_79uj_nh_qhysv_001_4.jpg',
        'https://cdn.ankhang.vn/media/product/22078_laptop_acer_gaming_nitro_5_tiger_an515_58_79uj_nh_qhysv_001_5.jpg',
        'https://cdn.ankhang.vn/media/product/22078_laptop_acer_gaming_nitro_5_tiger_an515_58_79uj_nh_qhysv_001_6.jpg',
        'https://cdn.ankhang.vn/media/product/22078_laptop_acer_gaming_nitro_5_tiger_an515_58_79uj_nh_qhysv_001_7.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '22077',
      name: ' Laptop Acer Gaming Aspire 7 A715-43G-R8GA NH.QHDSV.002 ',
      cost: '21.999.000 VN\u0110',
      specifications:
        'CPU AMD Ryzen R5-5625U (16MB, up to 4.30GHz), RAM 8GB DDR4 3200MHz, SSD 512GB PCIe NVMe, VGA NVIDIA GeForce RTX 3050 4GB GDDR6, Display 15.6Inch FHD IPS 144Hz Acer ComfyView, Pin 3Cell 50WHrs, Color Charcoal Black (\u0110en), Weight 2.10 Kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/22077_laptop_acer_gaming_aspire_7_a715_43g_r8ga_nh_qhdsv_002_0.jpg',
        'https://cdn.ankhang.vn/media/product/22077_laptop_acer_gaming_aspire_7_a715_43g_r8ga_nh_qhdsv_002_1.jpg',
        'https://cdn.ankhang.vn/media/product/22077_laptop_acer_gaming_aspire_7_a715_43g_r8ga_nh_qhdsv_002_2.jpg',
        'https://cdn.ankhang.vn/media/product/22077_laptop_acer_gaming_aspire_7_a715_43g_r8ga_nh_qhdsv_002_3.jpg',
        'https://cdn.ankhang.vn/media/product/22077_laptop_acer_gaming_aspire_7_a715_43g_r8ga_nh_qhdsv_002_4.jpg',
        'https://cdn.ankhang.vn/media/product/22077_laptop_acer_gaming_aspire_7_a715_43g_r8ga_nh_qhdsv_002_5.jpg',
        'https://cdn.ankhang.vn/media/product/22077_laptop_acer_gaming_aspire_7_a715_43g_r8ga_nh_qhdsv_002_6.jpg',
        'https://cdn.ankhang.vn/media/product/22077_laptop_acer_gaming_aspire_7_a715_43g_r8ga_nh_qhdsv_002_7.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '22076',
      name: ' Laptop Acer Swift 3 SF314-44-R2U3 NX.K0WSV.001 (B\u1ea3n R5-5625U) ',
      cost: '21.999.000 VN\u0110',
      specifications:
        'CPU AMD Ryzen R5-5625U (16MB, up to 4.30GHz), RAM 16GB LPDDR4X Onboard, SSD 512GB PCIe NVMe, VGA AMD Radeon Graphics, Display 14.0Inch FHD IPS 60Hz Acer ComfyView, Pin 3Cell 50WHrs, Color Prodigy Pink (H\u1ed3ng), Finger Print, V\u1ecf ALU, Weight 1.20 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/22076_laptop_acer_swift_3_sf314_44_r2u3_nx_k0wsv_001_0.jpg',
        'https://cdn.ankhang.vn/media/product/22076_laptop_acer_swift_3_sf314_44_r2u3_nx_k0wsv_001_1.jpg',
        'https://cdn.ankhang.vn/media/product/22076_laptop_acer_swift_3_sf314_44_r2u3_nx_k0wsv_001_2.jpg',
        'https://cdn.ankhang.vn/media/product/22076_laptop_acer_swift_3_sf314_44_r2u3_nx_k0wsv_001_3.jpg',
        'https://cdn.ankhang.vn/media/product/22076_laptop_acer_swift_3_sf314_44_r2u3_nx_k0wsv_001_4.jpg',
        'https://cdn.ankhang.vn/media/product/22076_laptop_acer_swift_3_sf314_44_r2u3_nx_k0wsv_001_5.jpg',
        'https://cdn.ankhang.vn/media/product/22076_laptop_acer_swift_3_sf314_44_r2u3_nx_k0wsv_001_6.jpg',
        'https://cdn.ankhang.vn/media/product/22076_laptop_acer_swift_3_sf314_44_r2u3_nx_k0wsv_001_7.jpg',
        'https://cdn.ankhang.vn/media/product/22076_laptop_acer_swift_3_sf314_44_r2u3_nx_k0wsv_001_8.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '22075',
      name: ' Laptop Acer Aspire 5 A514-54-511G NX.A28SV.009 (B\u1ea3n 1TB SSD) ',
      cost: '19.999.000 VN\u0110',
      specifications:
        'CPU Intel Core i5-1135G7 (8MB, up to 4.20GHz), RAM 8GB DDR4 2666MHz (4GB + 4GB onboard), SSD 1TB PCIe NVMe, VGA Intel Iris Xe Graphics, Display 14.0inch FHD IPS Acer ComfyView Matte, Pin 3Cell 48WHrs, Color Pure Silver (B\u1ea1c), LED Keyboard, v\u1ecf ALUp, Weight 1.46 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/22075_laptop_acer_aspire_5_a514_54_511g_nx_a28sv_009_1.jpg',
        'https://cdn.ankhang.vn/media/product/22075_laptop_acer_aspire_5_a514_54_511g_nx_a28sv_009_2.jpg',
        'https://cdn.ankhang.vn/media/product/22075_laptop_acer_aspire_5_a514_54_511g_nx_a28sv_009_3.jpg',
        'https://cdn.ankhang.vn/media/product/22075_laptop_acer_aspire_5_a514_54_511g_nx_a28sv_009_4.jpg',
        'https://cdn.ankhang.vn/media/product/22075_laptop_acer_aspire_5_a514_54_511g_nx_a28sv_009_5.jpg',
        'https://cdn.ankhang.vn/media/product/22075_laptop_acer_aspire_5_a514_54_511g_nx_a28sv_009_6.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '22074',
      name: ' Laptop Acer Aspire 5 A514-55-5954 NX.K5BSV.001 ',
      cost: '18.999.000 VN\u0110',
      specifications:
        'CPU Intel Core i5-1235U (12MB, up to 4.40GHz), RAM 8GB DDR4 2666MHz (4GB + 4GB Onboard), SSD 512GB PCIe NVMe, VGA Intel Iris Xe Graphics, Display 14.0inch FHD IPS 60Hz Acer ComfyView, Pin 3Cell 50WHrs, Color Steel Gray (X\u00e1m), V\u1ecf ALUp, LED KeyBoard, Weight 1.40 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/22074_laptop_acer_aspire_5_a514_55_5954_nx_k5bsv_001_1.jpg',
        'https://cdn.ankhang.vn/media/product/22074_laptop_acer_aspire_5_a514_55_5954_nx_k5bsv_001_2.jpg',
        'https://cdn.ankhang.vn/media/product/22074_laptop_acer_aspire_5_a514_55_5954_nx_k5bsv_001_3.jpg',
        'https://cdn.ankhang.vn/media/product/22074_laptop_acer_aspire_5_a514_55_5954_nx_k5bsv_001_4.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '22072',
      name: ' Laptop Acer Aspire 3 A315-59-381E NX.K6TSV.006 (b\u1ea3n Core i3-1215U) ',
      cost: '13.999.000 VN\u0110',
      specifications:
        'CPU Intel Core i3-1215U (10MB, up to 4.40GHz), RAM 8GB DDR4 (2x4GB), SSD 512GB PCIe NVMe, VGA Intel Iris Xe Graphics, Display 15.6inch FHD IPS Acer ComfyView, Pin 3Cell 40WHrs, Color Pure Silver (B\u1ea1c), Weight 1.70 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/22072_laptop_acer_aspire_3_a315_59_381e_nx_k6tsv_006_1.jpg',
        'https://cdn.ankhang.vn/media/product/22072_laptop_acer_aspire_3_a315_59_381e_nx_k6tsv_006_2.jpg',
        'https://cdn.ankhang.vn/media/product/22072_laptop_acer_aspire_3_a315_59_381e_nx_k6tsv_006_3.jpg',
        'https://cdn.ankhang.vn/media/product/22072_laptop_acer_aspire_3_a315_59_381e_nx_k6tsv_006_4.jpg',
        'https://cdn.ankhang.vn/media/product/22072_laptop_acer_aspire_3_a315_59_381e_nx_k6tsv_006_5.jpg',
        'https://cdn.ankhang.vn/media/product/22072_laptop_acer_aspire_3_a315_59_381e_nx_k6tsv_006_6.jpg',
        'https://cdn.ankhang.vn/media/product/22072_laptop_acer_aspire_3_a315_59_381e_nx_k6tsv_006_7.jpg',
        'https://cdn.ankhang.vn/media/product/22072_laptop_acer_aspire_3_a315_59_381e_nx_k6tsv_006_8.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '21694',
      name: ' Laptop Gaming Acer Predator Triton 500 SE PT516-52s-75E3 NH.QFQSV.001 ',
      cost: '69.990.000 VN\u0110',
      specifications:
        'CPU Intel Core i7-12700H (24MB, up to 4.70GHz), RAM 16GB LPDDR5 4800MHz Onboard, SSD 1TB PCIe NVMe, Display 16.0Inch WQXGA IPS 240Hz 500nits 100%sRGB, VGA NVIDIA GeForce 3070Ti 8GB GDDR6, Pin 4Cell 99.98WHrs, Color Steel Gray (X\u00e1m), Weight 2.40 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/21694_laptop_gaming_acer_predator_triton_500_se_pt516_52s_75e3_nh_qfqsv_001_1.jpg',
        'https://cdn.ankhang.vn/media/product/21694_laptop_gaming_acer_predator_triton_500_se_pt516_52s_75e3_nh_qfqsv_001_2.jpg',
        'https://cdn.ankhang.vn/media/product/21694_laptop_gaming_acer_predator_triton_500_se_pt516_52s_75e3_nh_qfqsv_001_3.jpg',
        'https://cdn.ankhang.vn/media/product/21694_laptop_gaming_acer_predator_triton_500_se_pt516_52s_75e3_nh_qfqsv_001_4.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
      ],
      details: [],
    },
    {
      id_prodcut: '21625',
      name: ' Laptop Acer Swift X SFX16-51G-50GS NX.AYLSV.002 ',
      cost: '29.990.000 VN\u0110',
      specifications:
        'CPU Intel Core i5-11320H (8MB, up to 4.50GHz), RAM 16GB LPDDR4X Onboard, SSD 512GB PCIe NVMe, VGA NVIDIA GeForce RTX 3050Ti 4GB GDDR5, Display 16.1Inch FHD IPS Acer ComfyView, Pin 4Cell 59WHrs, Color Steel Gray (X\u00e1m), Finger Print, Weight 1.90 kg, OS Windows 11 Home, ',
      images: [
        'https://cdn.ankhang.vn/media/product/21625_laptop_acer_swift_x_sfx16_51g_50gs_nx_aylsv_002_1.jpg',
        'https://cdn.ankhang.vn/media/product/21625_laptop_acer_swift_x_sfx16_51g_50gs_nx_aylsv_002_2.jpg',
        'https://cdn.ankhang.vn/media/product/21625_laptop_acer_swift_x_sfx16_51g_50gs_nx_aylsv_002_3.jpg',
        'https://cdn.ankhang.vn/media/product/21625_laptop_acer_swift_x_sfx16_51g_50gs_nx_aylsv_002_4.jpg',
        'https://cdn.ankhang.vn/media/product/21625_laptop_acer_swift_x_sfx16_51g_50gs_nx_aylsv_002_5.jpg',
        'https://cdn.ankhang.vn/media/product/21625_laptop_acer_swift_x_sfx16_51g_50gs_nx_aylsv_002_6.jpg',
        'https://cdn.ankhang.vn/media/product/21625_laptop_acer_swift_x_sfx16_51g_50gs_nx_aylsv_002_8.jpg',
        'https://cdn.ankhang.vn/media/product/20531_giay_chung_nhan_chinh_hang_acer_2020_2.jpg',
        'https://cdn.ankhang.vn/media/product/21625_laptop_acer_swift_x_sfx16_51g_50gs_nx_aylsv_002_7.jpg',
      ],
      details: [],
    },
  ];
  constructor(public navigateService: NavigateService, public route: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    if (!this.searchTypeName) {
      this.searchTypeName = this.searchType[0].value;
    }
  }

  selectSearch(searchValue: string) {
    this.searchTypeName = searchValue;
  }
}
