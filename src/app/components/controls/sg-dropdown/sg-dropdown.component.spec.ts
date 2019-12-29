import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgDropdownComponent } from './sg-dropdown.component';

describe('SgDropdownComponent', () => {
  let component: SgDropdownComponent;
  let fixture: ComponentFixture<SgDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
