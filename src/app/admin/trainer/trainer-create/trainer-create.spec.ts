import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCreate } from './trainer-create';

describe('TrainerCreate', () => {
  let component: TrainerCreate;
  let fixture: ComponentFixture<TrainerCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
