import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  constructor() {}
  @Input() collectionSize: any;
  @Input() page: any;
  @Input() pageSize: any;

  @Output()  pageChange = new EventEmitter<any>();
  ngOnInit(): void {}

  loadPage(page) {
    this.pageChange.emit(page);
  }
}
