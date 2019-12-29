import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';


@NgModule({
  declarations: [
    AlertComponent,
    ValidationMessagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[AlertComponent,ValidationMessagesComponent]
})
export class DirectiveModule { }
