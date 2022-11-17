import { TestBed } from '@angular/core/testing';

import { StateStateService } from './state-state.service';

describe('StateStateService', () => {
  let service: StateStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
