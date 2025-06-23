import { TestBed } from '@angular/core/testing';

import { ManageWorkoutsService } from './manage-workouts-service';

describe('ManageWorkoutsService', () => {
  let service: ManageWorkoutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageWorkoutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
