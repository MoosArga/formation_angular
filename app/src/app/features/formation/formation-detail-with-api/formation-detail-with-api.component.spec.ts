import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationDetailWithApiComponent } from './formation-detail-with-api.component';

describe('FormationDetailWithApiComponent', () => {
  let component: FormationDetailWithApiComponent;
  let fixture: ComponentFixture<FormationDetailWithApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationDetailWithApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationDetailWithApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
