import { AuthenticationService } from './../../service/authentication.service';
import { ToastService } from './../../service/toast.service';
import { SignUpComponent } from './../sign-up/sign-up.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormService } from 'src/app/service/form.service';
import { LUser } from 'src/app/constant/model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LogInComponent>,
    public formService: FormService,
    public toastService: ToastService,
    public AuthenticationService: AuthenticationService
  ) {}

  logInForm = this.fb.group({ 
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
  });
  ngOnInit(): void {}
  onSubmit() {
    let data: LUser = {
      username: this.logInForm.controls['userName'].value,
      password: this.logInForm.controls['passWord'].value,
    };
    this.AuthenticationService.login(data).subscribe(
      (res: any) => {
        this.logInForm.reset();
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res));
        this.AuthenticationService.isAdmin = res.isAdmin;
        this.AuthenticationService.isLogin = true;
        this.toastService.showSuccess('Đăng nhập thành công');
        this.closeDialog();
      },
      (err) => {
        this.logInForm.reset();
        this.toastService.showError('Đăng nhập thất bại, vui lòng thử lại');
      }
    );
  }

  validateOverall(control: string) {
    if (
      this.logInForm.controls[control].invalid &&
      (this.logInForm.controls[control].dirty ||
        this.logInForm.controls[control].touched)
    ) {
      return true;
    }
    return false;
  }
  validateControls(control: string, rule: string) {
    if (this.logInForm.controls[control].errors?.[rule]) {
      return true;
    }
    return false;
  }

  closeDialog() {
    this.dialogRef.close();
  }
  switchSignUp() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '600px',
    });
    this.closeDialog();
  }
}
