import { NavigateService } from './../../service/navigate.service';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { NAVIGATE } from '../../constant/type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  constructor(
    public dialog: MatDialog,
    public navigateService: NavigateService
  ) {}
  isLogin: boolean = false;
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });
  offsetHeight: number = 0;
  listProductType = [
    'Laptop',
    'PCGaming',
    'Màn Hình',
    'Linh Kiện',
    'Gaming Gear',
    'Phụ Kiện',
    'Apple',
  ];
  listProductItem = [
    'Laptop Dell',
    'Laptop Asus',
    'Laptop MSI',
    'Laptop HP',
    'Laptop Lenovo',
  ];
  ngOnInit(): void {
    this.offsetHeight = document.getElementsByTagName('header')[0].offsetHeight;
  }

  ngAfterViewChecked(): void {}
  openDialog(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '600px',
    });
  }
}
