import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemanderPapiersComponent } from './demander-papiers.component';

describe('DemandePapiersComponent', () => {
  let component: DemanderPapiersComponent;
  let fixture: ComponentFixture<DemanderPapiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemanderPapiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemanderPapiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
