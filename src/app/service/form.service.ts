import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}
  REGEX_PASSOWRD = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$';
  REGEX_PHONE = '^(0)+[0-9]{9,10}$';
  REGEX_ONLY_NUMBER = '^[0-9]*$';
}
