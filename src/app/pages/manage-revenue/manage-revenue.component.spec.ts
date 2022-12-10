import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRevenueComponent } from './manage-revenue.component';

describe('ManageRevenueComponent', () => {
  let component: ManageRevenueComponent;
  let fixture: ComponentFixture<ManageRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRevenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
