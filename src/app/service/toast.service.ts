import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {}
  showSuccess(msg: string) {
    this.toastr.success(msg, 'Thành công');
  }
  showError(msg: string) {
    this.toastr.error(msg, 'Thất bại');
  }
  showWarning(msg: string) {
    this.toastr.warning(msg, 'Chú ý');
  }
}
