import { Component, OnInit, Input, ViewChild, Inject, Optional } from '@angular/core';
import {  NgModel,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  NG_ASYNC_VALIDATORS} from '@angular/forms';
import { ValueAccessorBase } from '../value-accessor';

let identifier = 0;
import * as $ from 'jquery';

declare var initializeInputMaskEditor:any;
@Component({
  selector: 'app-sg-currencyeditor',
  templateUrl: './sg-currencyeditor.component.html',
  styleUrls: ['./sg-currencyeditor.component.scss'],
  providers : [
    {provide: NG_VALUE_ACCESSOR, useExisting: SgCurrencyeditorComponent, multi: true}
  ]
})
export class SgCurrencyeditorComponent extends ValueAccessorBase<string> implements OnInit {

  @ViewChild(NgModel,{static:true}) model: NgModel;

  public identifier = `sg-currencyeditor-${identifier++}`;

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
  label:string;
  @Input()
  name:string;
  
  ngOnInit() {
    let self=this;
      $(document).ready(()=>{
        new initializeInputMaskEditor(self.identifier);
        $('#'+self.identifier).on('change',function(e){
          console.info(e.target);
        })
      });
      
  }
  onChange(event){
    console.log(event)
  }
}
