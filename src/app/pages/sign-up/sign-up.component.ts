import { User } from './../../constant/model';
import { ToastService } from './../../service/toast.service';
import { AuthenticationService } from './../../service/authentication.service';
import { FormService } from './../../service/form.service';
import { LogInComponent } from './../log-in/log-in.component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../log-in/log-in.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    public formService: FormService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<SignUpComponent>,
    public AuthenticationService: AuthenticationService,
    public toastService: ToastService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  signUpForm = this.fb.group({
    fullName: [
      '',
      Validators.compose([Validators.required, Validators.maxLength(30)]),
    ], 
    userEmail: [
      '',
      Validators.compose([Validators.required, Validators.email]),
    ],
    userName: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
    ],
    passWord: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(this.formService.REGEX_PASSOWRD),
      ]),
    ],
    phoneNumber: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(this.formService.REGEX_PHONE),
      ]),
    ],
    address: [
      '',
      Validators.compose([Validators.required, Validators.maxLength(90)]),
    ],
  });
  validateOverall(control: string) {
    if (
      this.signUpForm.controls[control].invalid &&
      (this.signUpForm.controls[control].dirty ||
        this.signUpForm.controls[control].touched)
    ) {
      return true;
    }
    return false;
  }
  validateControls(control: string, rule: string) {
    if (this.signUpForm.controls[control].errors?.[rule]) {
      return true;
    }
    return false;
  }
  ngOnInit(): void {
    console.log;
  }
  onSubmit() {
    let data: User = {
      username: this.signUpForm.controls['userName'].value,
      password: this.signUpForm.controls['passWord'].value,
      phone: this.signUpForm.controls['phoneNumber'].value,
      email: this.signUpForm.controls['userEmail'].value,
      fullName: this.signUpForm.controls['fullName'].value,
      address: this.signUpForm.controls['address'].value,
    };
    this.AuthenticationService.signUp(data).subscribe(
      () => {
        this.signUpForm.reset();
        this.toastService.showSuccess(
          'Đăng ký thành công, bạn sẽ được chuyển sang trang đăng nhập.'
        );
        this.switchLogin();
      },
      (err) => {
        let msg = err.error.text;
        this.signUpForm.reset();
        msg
          ? this.toastService.showError(msg)
          : this.toastService.showError('Đăng ký thất bại, vui lòng thử lại');
      }
    );
  }
  closeDialog() {
    this.dialogRef.close();
  }
  switchLogin() {
    const dialogRef = this.dialog.open(LogInComponent, {
      width: '600px',
    });
    this.closeDialog();
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
