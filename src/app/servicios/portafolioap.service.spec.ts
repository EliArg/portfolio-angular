import { TestBed } from '@angular/core/testing';

import { PortafolioapService } from './portafolioap.service';

describe('PortafolioapService', () => {
  let service: PortafolioapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortafolioapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
