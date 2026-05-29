import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAvailableList } from './class-available-list';

describe('ClassAvailableList', () => {
  let component: ClassAvailableList;
  let fixture: ComponentFixture<ClassAvailableList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassAvailableList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassAvailableList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
