import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfWorkouts } from './type-of-workouts';

describe('TypeOfWorkouts', () => {
  let component: TypeOfWorkouts;
  let fixture: ComponentFixture<TypeOfWorkouts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeOfWorkouts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOfWorkouts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
