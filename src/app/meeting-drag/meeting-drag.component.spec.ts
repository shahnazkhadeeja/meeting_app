import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingDragComponent } from './meeting-drag.component';

describe('MeetingDragComponent', () => {
  let component: MeetingDragComponent;
  let fixture: ComponentFixture<MeetingDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingDragComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
