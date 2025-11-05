import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signins } from './signins';

describe('Signins', () => {
  let component: Signins;
  let fixture: ComponentFixture<Signins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Signins]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signins);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
