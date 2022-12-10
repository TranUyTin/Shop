import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './pages/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LogInComponent } from './pages/log-in/log-in.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SwiperModule } from 'swiper/angular';
import { MatBadgeModule } from '@angular/material/badge';
import { ManageComponent } from './pages/manage/manage.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ManageRevenueComponent } from './pages/manage-revenue/manage-revenue.component';
import { ManageProductComponent } from './pages/manage-product/manage-product.component';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptorInterceptor } from './interceptor/jwt-interceptor.interceptor';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { SortPipe } from './sort.pipe';
import { PolicyInsuranceComponent } from './pages/policy-insurance/policy-insurance.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    CarouselComponent,
    FooterComponent,
    ProductCategoryComponent,
    SignUpComponent,
    LogInComponent,
    CartComponent,
    ProductDetailComponent,
    ManageComponent,
    ManageRevenueComponent,
    ManageProductComponent,
    PaginationComponent,
    AddProductComponent,
    InsuranceComponent,
    SortPipe,
    PolicyInsuranceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    NgbModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    SwiperModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule,
    NgApexchartsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      progressBar: true,
      closeButton: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true,
    },
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
