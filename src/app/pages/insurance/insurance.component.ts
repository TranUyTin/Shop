import { ToastService } from 'src/app/service/toast.service';
import { UserService } from 'src/app/service/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  listProduct: any = []
  constructor(
    public userService : UserService,
    public toastService: ToastService 
  ) { }


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  searchInsurance(data){
    const dataInput = data.value
    this.listProduct = [];
    this.userService.searchBill(dataInput).subscribe
    ((res: any) => {
      const date = new Date(res.createdAt);
      res.createdAt = date.setFullYear(date.getFullYear() + 2)
      this.listProduct = res;
      this.toastService.showSuccess("Tìm kiếm thành công!")
    }, error => {
      console.log(error)
      this.toastService.showError('Không tìm thấy kết quả, vui lòng kiểm tra lại mã số hóa đơn')
    })
  }
}
