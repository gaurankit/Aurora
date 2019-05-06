import { TestBed } from '@angular/core/testing';

import { AutosuggestSearchService } from './autosuggest-search-service';

describe('AutosuggestSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutosuggestSearchService = TestBed.get(AutosuggestSearchService);
    expect(service).toBeTruthy();
  });
});
