import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteAssignmentsComponent } from './institute-assignments.component';

describe('InstituteAssignmentsComponent', () => {
  let component: InstituteAssignmentsComponent;
  let fixture: ComponentFixture<InstituteAssignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteAssignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
