import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgGridComponent } from './sg-grid.component';

describe('SgGridComponent', () => {
  let component: SgGridComponent;
  let fixture: ComponentFixture<SgGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
