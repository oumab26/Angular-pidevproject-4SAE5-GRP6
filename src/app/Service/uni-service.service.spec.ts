import { TestBed } from '@angular/core/testing';

import { UniServiceService } from './uni-service.service';

describe('UniServiceService', () => {
  let service: UniServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
