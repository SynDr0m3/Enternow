import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideNav } from './admin-side-nav';

describe('AdminSideNav', () => {
  let component: AdminSideNav;
  let fixture: ComponentFixture<AdminSideNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSideNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSideNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
