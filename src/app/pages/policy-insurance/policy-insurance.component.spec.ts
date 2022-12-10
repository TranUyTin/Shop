import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyInsuranceComponent } from './policy-insurance.component';

describe('PolicyInsuranceComponent', () => {
  let component: PolicyInsuranceComponent;
  let fixture: ComponentFixture<PolicyInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
