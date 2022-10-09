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
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<SignUpComponent>,
    public formSerive: FormService,
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
        Validators.pattern(this.formSerive.REGEX_PASSOWRD),
      ]),
    ],
    phoneNumber: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(this.formSerive.REGEX_PHONE),
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
    console.log('Infor', this.signUpForm);
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
