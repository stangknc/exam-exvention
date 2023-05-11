import { TestBed } from '@angular/core/testing';

import { PresidentService } from './president.service';

describe('PresidentService', () => {
  let service: PresidentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresidentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
