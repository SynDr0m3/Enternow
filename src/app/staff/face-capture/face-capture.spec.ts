import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceCapture } from './face-capture';

describe('FaceCapture', () => {
  let component: FaceCapture;
  let fixture: ComponentFixture<FaceCapture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaceCapture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceCapture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
