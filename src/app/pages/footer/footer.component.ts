import { AuthenticationService } from './../../service/authentication.service';
import { NavigateService } from 'src/app/service/navigate.service';
import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  AfterViewChecked,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, OnChanges, AfterViewChecked {
  isShowBtn: boolean = false;
  constructor(
    public navigateService: NavigateService,
    public AuthenticationService: AuthenticationService
  ) {}
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}
  ngAfterViewChecked(): void {}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      this.isShowBtn = true;
    } else {
      this.isShowBtn = false;
    }
  }
  scrollToTop() {
    document.documentElement.scrollTop = 0;
  }
}
