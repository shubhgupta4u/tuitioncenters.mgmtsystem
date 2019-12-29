import { Component, OnInit, Input, ViewChild, Inject, Optional } from '@angular/core';
import {  NgModel,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  NG_ASYNC_VALIDATORS} from '@angular/forms';
import { ValueAccessorBase } from '../value-accessor';

let identifier = 0;

@Component({
  selector: 'app-sg-texteditor',
  templateUrl: './sg-texteditor.component.html',
  styleUrls: ['./sg-texteditor.component.scss'],
  providers : [
    {provide: NG_VALUE_ACCESSOR, useExisting: SgTexteditorComponent, multi: true}
  ]
})
export class SgTexteditorComponent  extends ValueAccessorBase<string> implements OnInit {

  @ViewChild(NgModel,{static:true}) model: NgModel;

  public identifier = `sg-texteditor-${identifier++}`;

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
  @Input()
  type:string;
  ngOnInit() {
   
  }
  onchange(event){
    console.log(event.target.value);
  }
}
