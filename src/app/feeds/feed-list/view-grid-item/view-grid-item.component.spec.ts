import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGridItemComponent } from './view-grid-item.component';

describe('ViewGridItemComponent', () => {
  let component: ViewGridItemComponent;
  let fixture: ComponentFixture<ViewGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
