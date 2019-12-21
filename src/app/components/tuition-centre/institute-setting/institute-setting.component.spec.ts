import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteSettingComponent } from './institute-setting.component';

describe('InstituteSettingComponent', () => {
  let component: InstituteSettingComponent;
  let fixture: ComponentFixture<InstituteSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituteSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
