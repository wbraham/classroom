import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAdminManagementDashboardComponent } from './school-admin-management-dashboard.component';

describe('SchoolAdminManagementDashboardComponent', () => {
  let component: SchoolAdminManagementDashboardComponent;
  let fixture: ComponentFixture<SchoolAdminManagementDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolAdminManagementDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAdminManagementDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
