import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBookingList } from './class-booking-list';

describe('ClassBookingList', () => {
  let component: ClassBookingList;
  let fixture: ComponentFixture<ClassBookingList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassBookingList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassBookingList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
