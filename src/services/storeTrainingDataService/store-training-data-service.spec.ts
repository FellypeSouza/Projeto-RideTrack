import { TestBed } from '@angular/core/testing';

import { StoreTrainingDataService } from './store-training-data-service';

describe('StoreTrainingDataService', () => {
  let service: StoreTrainingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreTrainingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
