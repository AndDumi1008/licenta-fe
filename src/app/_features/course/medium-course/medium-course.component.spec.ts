import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumCourseComponent } from './medium-course.component';

describe('MediumCourseComponent', () => {
  let component: MediumCourseComponent;
  let fixture: ComponentFixture<MediumCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
