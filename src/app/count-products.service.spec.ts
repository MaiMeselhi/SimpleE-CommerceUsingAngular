import { TestBed } from '@angular/core/testing';

import { CountProductsService } from './count-products.service';

describe('CountProductsService', () => {
  let service: CountProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
