import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactCourseComponent } from './compact-course.component';

describe('CompactCourseComponent', () => {
  let component: CompactCourseComponent;
  let fixture: ComponentFixture<CompactCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompactCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompactCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
