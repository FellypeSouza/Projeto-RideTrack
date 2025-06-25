import { TestBed } from '@angular/core/testing';

import { ManageTypeOfWorkoutService } from './manage-type-of-workout-service';

describe('ManageTypeOfWorkoutService', () => {
  let service: ManageTypeOfWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageTypeOfWorkoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
