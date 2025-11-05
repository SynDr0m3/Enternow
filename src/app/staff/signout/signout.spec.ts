import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signout } from './signout';

describe('Signout', () => {
  let component: Signout;
  let fixture: ComponentFixture<Signout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Signout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
