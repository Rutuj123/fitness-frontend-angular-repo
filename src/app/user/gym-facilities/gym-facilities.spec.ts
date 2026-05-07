import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymFacilities } from './gym-facilities';

describe('GymFacilities', () => {
  let component: GymFacilities;
  let fixture: ComponentFixture<GymFacilities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymFacilities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymFacilities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
