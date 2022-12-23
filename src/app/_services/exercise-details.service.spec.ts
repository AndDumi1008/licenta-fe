import { TestBed } from '@angular/core/testing';

import { ExerciseDetailsService } from './exercise-details.service';

describe('ExerciseDetailsService', () => {
  let service: ExerciseDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
