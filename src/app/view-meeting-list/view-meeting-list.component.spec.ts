import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMeetingListComponent } from './view-meeting-list.component';

describe('ViewMeetingListComponent', () => {
  let component: ViewMeetingListComponent;
  let fixture: ComponentFixture<ViewMeetingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMeetingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMeetingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
