import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavCourseTreeComponent } from './sidenav-course-tree.component';

describe('SidenavCourseTreeComponent', () => {
  let component: SidenavCourseTreeComponent;
  let fixture: ComponentFixture<SidenavCourseTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavCourseTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavCourseTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
