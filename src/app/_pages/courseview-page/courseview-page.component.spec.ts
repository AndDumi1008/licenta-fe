import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseviewPageComponent } from './courseview-page.component';

describe('BodyComponentComponent', () => {
  let component: CourseviewPageComponent;
  let fixture: ComponentFixture<CourseviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseviewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
