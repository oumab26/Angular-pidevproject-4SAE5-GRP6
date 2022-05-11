import { TestBed } from '@angular/core/testing';

import { UniReqService } from './uni-req.service';

describe('UniReqService', () => {
  let service: UniReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
