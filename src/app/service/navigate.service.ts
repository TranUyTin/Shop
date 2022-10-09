import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  constructor(public route: Router) {}
  navigatePath(path: string) {
    this.route.navigate([path]);
  }
  navigateDetail(path: string, id: string) {
    this.route.navigate([path], { queryParams: { id: id } });
  }
}
