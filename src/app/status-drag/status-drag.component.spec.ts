import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusDragComponent } from './status-drag.component';

describe('StatusDragComponent', () => {
  let component: StatusDragComponent;
  let fixture: ComponentFixture<StatusDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusDragComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
