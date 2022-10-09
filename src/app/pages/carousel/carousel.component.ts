import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Swiper, { Autoplay } from 'swiper';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual,  Autoplay]);
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {
  images = [1, 2, 3, 4].map((n) => `../../assets/image/slider/slider${n}.jpg`);

  constructor() {}

  ngOnInit(): void {}
}
