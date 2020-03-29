import { TestBed } from '@angular/core/testing';

import { BookProviderService } from './book-provider.service';

describe('BookProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookProviderService = TestBed.get(BookProviderService);
    expect(service).toBeTruthy();
  });
});
