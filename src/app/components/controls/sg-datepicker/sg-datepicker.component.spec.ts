import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgDatepickerComponent } from './sg-datepicker.component';

describe('SgDatepickerComponent', () => {
  let component: SgDatepickerComponent;
  let fixture: ComponentFixture<SgDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
