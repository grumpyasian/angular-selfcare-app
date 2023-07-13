import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoutineCardComponent } from './create-routine-card.component';

describe('CreateRoutineCardComponent', () => {
  let component: CreateRoutineCardComponent;
  let fixture: ComponentFixture<CreateRoutineCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRoutineCardComponent]
    });
    fixture = TestBed.createComponent(CreateRoutineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
