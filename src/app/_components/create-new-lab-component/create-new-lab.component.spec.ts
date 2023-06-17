import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewLabComponent } from './create-new-lab.component';

describe('CreateNewLabComponentComponent', () => {
  let component: CreateNewLabComponent;
  let fixture: ComponentFixture<CreateNewLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewLabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
