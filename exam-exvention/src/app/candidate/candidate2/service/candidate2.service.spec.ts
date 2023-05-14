import { TestBed } from '@angular/core/testing';

import { Candidate2Service } from './candidate2.service';

describe('Candidate2Service', () => {
  let service: Candidate2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Candidate2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
