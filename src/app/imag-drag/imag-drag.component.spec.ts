import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagDragComponent } from './imag-drag.component';

describe('ImagDragComponent', () => {
  let component: ImagDragComponent;
  let fixture: ComponentFixture<ImagDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagDragComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
