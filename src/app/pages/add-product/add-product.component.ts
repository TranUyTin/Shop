import { ToastService } from 'src/app/service/toast.service';
import { FormService } from 'src/app/service/form.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit, AfterViewInit} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { UserService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit, AfterViewInit {
  pageNumber=1;
  pageSize=8;
  sortColumn='id';
  isAscSort=true;
  listProductType = []
  listProductItem: any = [];

  constructor(
    public fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formService: FormService,
    public userService: UserService,
    public toastService : ToastService,
  ) {}
  files: string[] = [];
  listProductDetails = []
  ngOnInit(): void {
    this.getListProductType();
    this.getListProductTypeDetails();
    if (this.userService.isEditProduct) {
     this.listProductDetails = this.data;
    }
  }

  addProductForm = this.fb.group({
    fullName: ['', Validators.required],
    cost: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(this.formService.REGEX_ONLY_NUMBER),
        Validators.minLength(4),
      ]),
    ],
    amount: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(this.formService.REGEX_ONLY_NUMBER),
      ]),
    ],
    specifications: ['', Validators.required],
    type: ['', Validators.required],
    brand: ['', Validators.required],
    image: ['', Validators.required],
  });

  validateOverall(control: string) {
    if (
      this.addProductForm.controls[control].invalid &&
      (this.addProductForm.controls[control].dirty ||
        this.addProductForm.controls[control].touched)
    ) {
      return true;
    }
    return false;
  }
  validateControls(control: string, rule: string) {
    if (this.addProductForm.controls[control].errors?.[rule]) {
      return true;
    }
    return false;
  }

  closeDialog() {
    this.dialogRef.close();
  }
  onFileChanged(event: any) {
    this.files = []
    if(event.target.files) {
      for(let i=0;i< event.target.files.length; i++) {
        this.files.push(event.target.files[i])
      }
    }
  }

  ngAfterViewInit(): void {
    if(this.userService.isEditProduct) {
      const name = this.listProductDetails['name'];
      const cost = this.listProductDetails['cost'];
      const quantity = this.listProductDetails['quantity'];
      const specifications = this.listProductDetails['specifications'];
      const brands = this.listProductDetails['brands']['name'];
      const productTypes = this.listProductDetails['productTypes']['name'];
      this.addProductForm.controls['fullName'].patchValue(name);
      this.addProductForm.controls['specifications'].patchValue(specifications)
      this.addProductForm.controls['cost'].patchValue(cost)
      this.addProductForm.controls['amount'].patchValue(quantity)
      this.addProductForm.controls['brand'].patchValue(brands)
      this.addProductForm.controls['type'].patchValue(productTypes)
    }
  }

  onSubmit() {
    const data = new FormData();
    data.append('name', this.addProductForm.controls['fullName'].value || '');
    data.append('specifications', this.addProductForm.controls['specifications'].value || '');
    data.append('cost', this.addProductForm.controls['cost'].value || '');
    data.append('quantity', this.addProductForm.controls['amount'].value || '');
    data.append('brand', this.addProductForm.controls['brand'].value || '');
    data.append('productType', this.addProductForm.controls['type'].value || '');
    for(let i = 0; i< this.files.length; i++) {
      data.append('images',this.files[i])
    }

    if(this.userService.isEditProduct) {
      this.userService.updateProduct(this.listProductDetails['id'],data).subscribe(
        (res: any) => {
          this.toastService.showError('Cập nhật sản phẩm thất bại')
        }, error => {
          this.toastService.showSuccess('Cập nhật sản phẩm thành công')
          this.userService.isEditProduct = false;
          this.dialogRef.close()
        }
      )
    } else {
      this.userService.createProduct(data).subscribe(
        (res: any) => {
          this.toastService.showError('Thêm sản phẩm thất bại');
        },
        error => {
          this.toastService.showSuccess('Thêm sản phẩm thành công');
          this.dialogRef.close()
        }
      )
    } 
  }

  

  getListProductTypeDetails(){
    const data = {
      pageNumber: this.pageNumber,
      pageSize: 100,
      sortColumn: this.sortColumn,
      isAscSort:this.isAscSort
    }
      this.userService.getListBrand(data).subscribe(
        (res:any) => {
          this.listProductItem = res.data;
        }, error => {
          console.log(error)
        }
      )

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

        console.log(this.listProductType)
    },
      (error:any) => {
        console.log(error);
    })
  }
}
