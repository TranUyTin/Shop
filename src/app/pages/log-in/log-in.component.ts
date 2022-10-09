import { SignUpComponent } from './../sign-up/sign-up.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormService } from 'src/app/service/form.service';

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
    public formService: FormService
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
    console.log('Infor', this.logInForm);
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
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
