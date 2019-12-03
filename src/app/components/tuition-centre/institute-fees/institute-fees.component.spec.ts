import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteFeesComponent } from './institute-fees.component';

describe('InstituteFeesComponent', () => {
  let component: InstituteFeesComponent;
  let fixture: ComponentFixture<InstituteFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
