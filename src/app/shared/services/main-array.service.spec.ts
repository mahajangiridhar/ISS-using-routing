import { TestBed } from '@angular/core/testing';

import { MainArrayService } from './main-array.service';

describe('MainArrayService', () => {
  let service: MainArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
