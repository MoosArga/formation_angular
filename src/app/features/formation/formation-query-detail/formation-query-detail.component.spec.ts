import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationQueryDetailComponent } from './formation-query-detail.component';

describe('FormationQueryDetailComponent', () => {
  let component: FormationQueryDetailComponent;
  let fixture: ComponentFixture<FormationQueryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationQueryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationQueryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
