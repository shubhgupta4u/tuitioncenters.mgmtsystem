import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgTexteditorComponent } from './sg-texteditor.component';

describe('SgTexteditorComponent', () => {
  let component: SgTexteditorComponent;
  let fixture: ComponentFixture<SgTexteditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgTexteditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgTexteditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
