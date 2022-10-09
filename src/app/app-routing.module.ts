import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'product_category',
    component: ProductCategoryComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'product_detail',
    component: ProductDetailComponent,
  },
  {
    path: '**',
    component: HomepageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
