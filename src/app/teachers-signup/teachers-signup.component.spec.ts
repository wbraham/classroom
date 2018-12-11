import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersSignupComponent } from './teachers-signup.component';

describe('TeachersSignupComponent', () => {
  let component: TeachersSignupComponent;
  let fixture: ComponentFixture<TeachersSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
