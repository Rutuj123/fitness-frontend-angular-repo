import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTrainers } from './our-trainers';

describe('OurTrainers', () => {
  let component: OurTrainers;
  let fixture: ComponentFixture<OurTrainers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurTrainers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurTrainers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
