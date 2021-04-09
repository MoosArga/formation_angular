import { TestBed } from '@angular/core/testing';

import { FormationDaoService } from './formation-dao.service';

describe('FormationDaoService', () => {
  let service: FormationDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
