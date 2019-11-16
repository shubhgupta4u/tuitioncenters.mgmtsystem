import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitionCentreComponent } from './tuition-centre.component';

describe('TuitionCentreComponent', () => {
  let component: TuitionCentreComponent;
  let fixture: ComponentFixture<TuitionCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuitionCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuitionCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
