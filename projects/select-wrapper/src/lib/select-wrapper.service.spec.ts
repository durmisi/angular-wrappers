import { TestBed } from '@angular/core/testing';

import { SelectWrapperService } from './select-wrapper.service';

describe('SelectWrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectWrapperService = TestBed.get(SelectWrapperService);
    expect(service).toBeTruthy();
  });
});
