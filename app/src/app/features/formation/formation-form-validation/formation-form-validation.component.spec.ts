import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationFormValidationComponent } from './formation-form-validation.component';

describe('FormationFormValidationComponent', () => {
  let component: FormationFormValidationComponent;
  let fixture: ComponentFixture<FormationFormValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationFormValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
