import { Component, OnInit, Input, ViewChild, Inject, Optional } from '@angular/core';
import {
  NgModel,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  NG_ASYNC_VALIDATORS
} from '@angular/forms';
import { ValueAccessorBase } from '../value-accessor';

let identifier = 0;
import * as $ from 'jquery';

declare var initializeDatePicker: any;

@Component({
  selector: 'app-sg-datepicker',
  templateUrl: './sg-datepicker.component.html',
  styleUrls: ['./sg-datepicker.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: SgDatepickerComponent, multi: true }
  ]
})
export class SgDatepickerComponent extends ValueAccessorBase<string> implements OnInit {

  @ViewChild(NgModel, { static: true }) model: NgModel;

  public identifier = `sg-datepicker-${identifier++}`;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
  ) {
    //super(validators, asyncValidators);
    super();
  }
  validate() {

  }

  @Input()
  label: string;
  @Input()
  name: string;

  ngOnInit() {
    let self = this;
    $(document).ready(function () {
      new initializeDatePicker(self.identifier);
      $('#' + self.identifier).on('change', function (e) {
        console.info(e.target);
      })
    });
  }
  onDateChange(event) {
    console.log(event)
  }
}
