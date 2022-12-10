import { FormService } from 'src/app/service/form.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formService: FormService
  ) {}
  files: string[] = [];
  ngOnInit(): void {}

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
    this.files = event.target.files;
    // for (let file of selectedFiles) {
    //   let reader = new FileReader();
    //   reader.onload = (e: any) => {
    //     this.files.push(e.target.result);
    //     // this.createImage(e.target.result);
    //   };
    //   reader.readAsDataURL(file);
    // }
  }

  onSubmit() {
    console.log(this.files);
  }
}
