import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningBodyComponent } from './learning-body.component';

describe('LearningBodyComponent', () => {
  let component: LearningBodyComponent;
  let fixture: ComponentFixture<LearningBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
