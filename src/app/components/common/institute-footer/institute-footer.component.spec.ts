import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteFooterComponent } from './institute-footer.component';

describe('InstituteFooterComponent', () => {
  let component: InstituteFooterComponent;
  let fixture: ComponentFixture<InstituteFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
