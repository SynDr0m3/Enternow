import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report } from './report';

describe('Report', () => {
  let component: Report;
  let fixture: ComponentFixture<Report>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Report]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Report);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
