import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteBatchesComponent } from './institute-batches.component';

describe('InstituteBatchesComponent', () => {
  let component: InstituteBatchesComponent;
  let fixture: ComponentFixture<InstituteBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteBatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
