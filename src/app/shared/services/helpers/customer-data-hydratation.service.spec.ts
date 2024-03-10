import { TestBed } from '@angular/core/testing';

import { CustomerDataHydratationService } from './customer-data-hydratation.service';

describe('UserDataHydratationService', () => {
  let service: CustomerDataHydratationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerDataHydratationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
