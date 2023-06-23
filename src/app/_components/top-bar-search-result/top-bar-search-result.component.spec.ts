import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarSearchResultComponent } from './top-bar-search-result.component';

describe('TopBarSearchResultComponent', () => {
  let component: TopBarSearchResultComponent;
  let fixture: ComponentFixture<TopBarSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarSearchResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
