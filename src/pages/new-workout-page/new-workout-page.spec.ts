import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkoutPage } from './new-workout-page';

describe('NewWorkoutPage', () => {
  let component: NewWorkoutPage;
  let fixture: ComponentFixture<NewWorkoutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewWorkoutPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWorkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
