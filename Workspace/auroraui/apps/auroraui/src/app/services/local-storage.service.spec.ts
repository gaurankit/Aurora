import { TestBed } from '@angular/core/testing';

import { storage } from './local-storage.service';

describe('storage', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: storage = TestBed.get(storage);
    expect(service).toBeTruthy();
  });
});
