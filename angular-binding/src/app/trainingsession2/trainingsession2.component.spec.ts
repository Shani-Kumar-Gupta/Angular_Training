import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trainingsession2Component } from './trainingsession2.component';

describe('Trainingsession2Component', () => {
  let component: Trainingsession2Component;
  let fixture: ComponentFixture<Trainingsession2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trainingsession2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trainingsession2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
