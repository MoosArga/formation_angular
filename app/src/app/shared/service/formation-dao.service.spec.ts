import { TestBed } from '@angular/core/testing';

import { FormationDaoService } from './formation-dao.service';

describe('FormationDaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormationDaoService = TestBed.get(FormationDaoService);
    expect(service).toBeTruthy();
  });
});
