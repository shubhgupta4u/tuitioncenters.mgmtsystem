import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteHeaderComponent } from './institute-header.component';

describe('InstituteHeaderComponent', () => {
  let component: InstituteHeaderComponent;
  let fixture: ComponentFixture<InstituteHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
