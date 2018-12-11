import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapersDemandDashboardComponent } from './papers-demand-dashboard.component';

describe('PapersDemandDashboardComponent', () => {
  let component: PapersDemandDashboardComponent;
  let fixture: ComponentFixture<PapersDemandDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapersDemandDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapersDemandDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
