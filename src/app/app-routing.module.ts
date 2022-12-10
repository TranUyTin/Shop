import { PolicyInsuranceComponent } from './pages/policy-insurance/policy-insurance.component';
import { ManageProductComponent } from './pages/manage-product/manage-product.component';
import { ManageRevenueComponent } from './pages/manage-revenue/manage-revenue.component';
import { ManageComponent } from './pages/manage/manage.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceComponent } from './pages/insurance/insurance.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'product_category/:id',
    component: ProductCategoryComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'product_detail/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'manage',
    component: ManageComponent,
  },
  {
    path: 'manage-revenue',
    component: ManageRevenueComponent,
  },
  {
    path: 'manage-product',
    component: ManageProductComponent,
  },
  {
    path: 'insurance',
    component: InsuranceComponent,
  },
  {
    path: 'policy_insurance',
    component: PolicyInsuranceComponent,
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
