import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDetailsPage } from './activity-details-page';

describe('ActivityDetailsPage', () => {
  let component: ActivityDetailsPage;
  let fixture: ComponentFixture<ActivityDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityDetailsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
