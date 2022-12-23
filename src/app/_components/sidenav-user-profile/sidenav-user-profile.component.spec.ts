import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavUserProfileComponent } from './sidenav-user-profile.component';

describe('SidenavUserProfileComponent', () => {
  let component: SidenavUserProfileComponent;
  let fixture: ComponentFixture<SidenavUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavUserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
