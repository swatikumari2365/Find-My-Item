import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportLostComponent } from './report-lost.component';

describe('ReportLostComponent', () => {
  let component: ReportLostComponent;
  let fixture: ComponentFixture<ReportLostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportLostComponent]
    });
    fixture = TestBed.createComponent(ReportLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
