import { TestBed } from '@angular/core/testing';

import { PortfolioapService } from './portfolioap.service';

describe('PortfolioapService', () => {
  let service: PortfolioapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
