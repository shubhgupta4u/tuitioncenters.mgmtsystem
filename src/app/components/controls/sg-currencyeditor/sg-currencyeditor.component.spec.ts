import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgCurrencyeditorComponent } from './sg-currencyeditor.component';

describe('SgCurrencyeditorComponent', () => {
  let component: SgCurrencyeditorComponent;
  let fixture: ComponentFixture<SgCurrencyeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgCurrencyeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgCurrencyeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
