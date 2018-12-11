import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsSignupComponent } from './schools-signup.component';

describe('SchoolsSignupComponent', () => {
  let component: SchoolsSignupComponent;
  let fixture: ComponentFixture<SchoolsSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
