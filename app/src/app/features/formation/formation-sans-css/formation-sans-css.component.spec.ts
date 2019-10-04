import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationSansCssComponent } from './formation-sans-css.component';

describe('FormationSansCssComponent', () => {
  let component: FormationSansCssComponent;
  let fixture: ComponentFixture<FormationSansCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationSansCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationSansCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
