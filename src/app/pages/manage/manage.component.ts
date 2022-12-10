import { UserService } from './../../service/user-service.service';
import { NavigateService } from './../../service/navigate.service';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private navigateService: NavigateService,
  private userService:UserService) {}
  
  pageNumber=1;
  pageSize=8;
  sortColumn='id';
  isAscSort=true;
  userList: any = [];

  collectionSize = 0;
  totalPage = 0;
  ngOnInit(): void {
    this.navigateService.currentUrl = this.navigateService.getCurrentUrl();
    this.getListUser();
  }
  ngOnDestroy(): void {
    this.navigateService.currentUrl = '';
  }

  ngAfterViewInit() {
  }
  getListUser(){
    const data = {
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
      sortColumn: this.sortColumn,
      isAscSort:true
    }
    this.userService.getListUser(data).subscribe(
      (res: any) =>{
        this.userList = res.data;
        this.collectionSize = res.summary.total;
        this.totalPage = res.summary.totalPage;
        console.log(res)
    },
      (error:any) => {
        console.log(error);
    })
  }
  searchUser(data){
    const dataInput = data.value
    this.userService.searchUser(dataInput).subscribe(res => {
      this.userList = res
    })
  }
  loadPage(page){
    this.pageNumber = page;
    this.getListUser();
  }
}

