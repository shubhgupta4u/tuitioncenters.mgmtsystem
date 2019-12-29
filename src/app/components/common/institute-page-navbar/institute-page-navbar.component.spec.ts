import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutePageNavbarComponent } from './institute-page-navbar.component';

describe('InstitutePageNavbarComponent', () => {
  let component: InstitutePageNavbarComponent;
  let fixture: ComponentFixture<InstitutePageNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutePageNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutePageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
