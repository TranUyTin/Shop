import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  currentUrl: string = '';
  constructor(
    public route: Router,
    public AuthenticationService: AuthenticationService
  ) {}
  navigatePath(path: string) {
    this.route.navigate([path]);
  }
  navigateDetail(path: string, id: string) {
    this.route.navigate([path], { queryParams: { id: id } });
  }
  getCurrentUrl() {
    return this.route.url;
  }
  isAdminPage() {
    return (
      this.AuthenticationService.isAdmin &&
      (this.currentUrl == '/manage' ||
        this.currentUrl == '/manage-product' ||
        this.currentUrl == '/manage-revenue')
    );
  }
}
