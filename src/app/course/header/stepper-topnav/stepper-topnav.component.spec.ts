import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperTopnavComponent } from './stepper-topnav.component';

describe('StepperTopnavComponent', () => {
  let component: StepperTopnavComponent;
  let fixture: ComponentFixture<StepperTopnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperTopnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperTopnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
