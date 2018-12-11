import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationStudentComponent } from './navigation-student.component';

describe('NavigationStudentComponent', () => {
  let component: NavigationStudentComponent;
  let fixture: ComponentFixture<NavigationStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
