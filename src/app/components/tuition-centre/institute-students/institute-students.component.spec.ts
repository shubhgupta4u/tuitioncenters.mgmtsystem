import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteStudentsComponent } from './institute-students.component';

describe('InstituteStudentsComponent', () => {
  let component: InstituteStudentsComponent;
  let fixture: ComponentFixture<InstituteStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
