import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationPathDetailComponent } from './formation-path-detail.component';

describe('FormationPathDetailComponent', () => {
  let component: FormationPathDetailComponent;
  let fixture: ComponentFixture<FormationPathDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationPathDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationPathDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
